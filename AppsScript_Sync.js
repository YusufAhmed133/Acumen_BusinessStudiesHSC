// =============================================================================
// Acumen HSC — Google Apps Script: Bi-directional Supabase ↔ Sheets sync
// =============================================================================
// SETUP (one-time):
//   1. Script Properties  (Extensions → Apps Script → Project settings → Script properties):
//        SUPABASE_URL        = https://<ref>.supabase.co
//        SUPABASE_SERVICE_KEY = <service_role_key>   (NOT the anon key — must bypass RLS)
//        WEBHOOK_SECRET       = <any random string>  (same value used in next two steps)
//   2. Run  setupSheets()   once (Acumen menu → "Set up sheets")
//   3. Run  installTriggers() once (Acumen menu → "Install triggers")
//   4. Deploy as a web app:
//        Execute as: Me    |   Who has access: Anyone
//        Copy the web app URL → paste into Vercel env NOTIFY_WEBHOOK_URL
//        Append  ?secret=<WEBHOOK_SECRET>  to the URL
//   5. In Supabase dashboard → Database → Webhooks, create ONE webhook:
//        Table: leads   |   Events: UPDATE, DELETE
//        URL: <web app URL>?secret=<WEBHOOK_SECRET>
//        Headers: Content-Type: application/json
// =============================================================================

const SS_ID        = '1g70ENNhQwcQ222qdNIsWT9uNjrzNpLOUGghsM2w--_s';
const LEADS_TAB    = 'Leads';
const STUDENTS_TAB = 'Active Students';
const ERRORS_TAB   = 'Errors';

// Column indices (1-based) — update setupSheets() too if you change these
const C = {
  TIMESTAMP:   1,
  NAME:        2,
  EMAIL:       3,
  PHONE:       4,
  YEAR:        5,
  MESSAGE:     6,
  STATUS:      7,
  NOTES:       8,
  SUPABASE_ID: 9,
  SOURCE:      10,
  TOTAL:       10,
};

const STATUSES = ['new', 'contacted', 'converted', 'disqualified'];

const COLOURS = {
  new:          { bg: '#ffffff', font: '#1a1a1a' },
  contacted:    { bg: '#fff8e1', font: '#7b5800' },
  converted:    { bg: '#e6f4ea', font: '#1f6b40' },
  disqualified: { bg: '#f28b82', font: '#5c0000' },
};

// =============================================================================
// doPost — entry point for all inbound HTTP events
// =============================================================================
function doPost(e) {
  try {
    // Validate secret (embedded as ?secret= query param)
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');
    if (expectedSecret) {
      const incoming = e.parameter && e.parameter.secret;
      if (incoming !== expectedSecret) {
        return jsonResp_({ ok: false, error: 'Unauthorized' });
      }
    }

    const raw = JSON.parse(e.postData.contents);
    const ss  = SpreadsheetApp.openById(SS_ID);

    // ── A. Form submission from Next.js ──────────────────────────────────────
    // Payload shape: { type: 'new_lead', name, email, phone, year_group,
    //                  source, message, submitted_at, id: <supabase_uuid> }
    if (raw.type === 'new_lead') {
      return handleNewLead_(ss, raw);
    }

    // ── B. Supabase database webhook (UPDATE) ────────────────────────────────
    // Payload shape: { type: 'UPDATE', table: 'leads', record: {...}, old_record: {...} }
    if (raw.type === 'UPDATE' && raw.table === 'leads') {
      return handleSupabaseUpdate_(ss, raw.record, raw.old_record);
    }

    // ── C. Supabase database webhook (DELETE) ────────────────────────────────
    if (raw.type === 'DELETE' && raw.table === 'leads') {
      return handleSupabaseDelete_(ss, raw.old_record);
    }

    // ── D. Legacy bare payload (no type field) — backwards compat ────────────
    if (raw.name && raw.email && !raw.type) {
      return handleNewLead_(ss, { type: 'new_lead', id: null, ...raw });
    }

    return jsonResp_({ ok: true, skipped: true });

  } catch (err) {
    logError_('doPost', err.message, String(e.postData && e.postData.contents).slice(0, 300));
    return jsonResp_({ ok: false, error: err.message });
  }
}

// =============================================================================
// A. New lead from form submission
// =============================================================================
function handleNewLead_(ss, data) {
  const sheet = ss.getSheetByName(LEADS_TAB);
  const lock  = LockService.getScriptLock();
  if (!lock.tryLock(8000)) return jsonResp_({ ok: false, error: 'Lock timeout' });

  try {
    // Idempotency: skip if this Supabase id is already present
    if (data.id && findRowById_(sheet, data.id) > 1) {
      return jsonResp_({ ok: true, skipped: 'duplicate_id' });
    }
    // Also skip duplicate emails when no id provided (legacy path)
    if (!data.id && emailExists_(sheet, data.email)) {
      return jsonResp_({ ok: true, skipped: 'duplicate_email' });
    }

    const ts = Utilities.formatDate(
      new Date(data.submitted_at || new Date()),
      'Australia/Sydney',
      'dd/MM/yyyy HH:mm'
    );

    sheet.appendRow([
      ts,
      data.name        || '',
      String(data.email || '').toLowerCase(),
      data.phone        || '',
      data.year_group   || '',
      truncate_(data.message || '', 300),
      'new',
      '',                                 // Notes — empty on arrival
      data.id           || '',            // SupabaseID
      data.source        || 'hero_form',
    ]);

    const newRow = sheet.getLastRow();
    applyDropdown_(sheet, newRow);
    applyStyle_(sheet, newRow, 'new');
    SpreadsheetApp.flush();

  } finally {
    lock.releaseLock();
  }

  return jsonResp_({ ok: true });
}

// =============================================================================
// B. Supabase status/notes update → reflect in Sheets
// =============================================================================
function handleSupabaseUpdate_(ss, record, oldRecord) {
  const sheet = ss.getSheetByName(LEADS_TAB);
  const row   = findRowById_(sheet, record.id);

  if (row <= 1) {
    // Not in Sheets yet — synthesise as a new lead
    if (record.name && record.email) {
      return handleNewLead_(ss, { type: 'new_lead', ...record, submitted_at: record.created_at });
    }
    return jsonResp_({ ok: true, skipped: 'row_not_found' });
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) return jsonResp_({ ok: false, error: 'Lock timeout' });

  try {
    const current = sheet.getRange(row, 1, 1, C.TOTAL).getValues()[0];

    // Only write cells that actually changed — prevents spurious onLeadEdit fires
    // (Apps Script does NOT fire onEdit when a cell is set to its current value programmatically)
    if (record.status && current[C.STATUS - 1] !== record.status) {
      sheet.getRange(row, C.STATUS).setValue(record.status);
      applyStyle_(sheet, row, record.status);
      if (record.status === 'converted') copyToStudents_(sheet, row);
    }

    const newNotes = record.notes ?? '';
    if (newNotes !== (current[C.NOTES - 1] ?? '')) {
      sheet.getRange(row, C.NOTES).setValue(newNotes);
    }

    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  return jsonResp_({ ok: true });
}

// =============================================================================
// C. Supabase DELETE → remove row from Sheets (and Students tab if converted)
// =============================================================================
function handleSupabaseDelete_(ss, oldRecord) {
  const sheet = ss.getSheetByName(LEADS_TAB);
  const row   = findRowById_(sheet, oldRecord.id);

  if (row > 1) {
    sheet.deleteRow(row);
    SpreadsheetApp.flush();
  }

  if (oldRecord.email) {
    removeStudentByEmail_(ss, oldRecord.email);
  }

  return jsonResp_({ ok: true });
}

// =============================================================================
// onLeadEdit — installable trigger: Sheets edit → Supabase PATCH
// =============================================================================
// Note: this is an INSTALLABLE trigger (not simple trigger) so UrlFetchApp works.
// Named differently from "onEdit" to avoid conflict with the built-in simple trigger.
function onLeadEdit(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== LEADS_TAB) return;

  const col = e.range.getColumn();
  const row = e.range.getRow();
  if (row <= 1) return;

  const isStatus = (col === C.STATUS);
  const isNotes  = (col === C.NOTES);
  if (!isStatus && !isNotes) return;

  // Apply visual style immediately — no API call needed
  if (isStatus) {
    const status = String(e.value || '').toLowerCase().trim();
    applyStyle_(sheet, row, status);
    if (status === 'converted') copyToStudents_(sheet, row);
  }

  // Sync back to Supabase
  const sid = sheet.getRange(row, C.SUPABASE_ID).getValue();
  if (!sid) return; // Legacy row — no Supabase id, skip

  const patch = {};
  if (isStatus) patch.status = String(e.value || '').toLowerCase().trim();
  if (isNotes)  patch.notes  = String(e.value || '');

  patchLead_(sid, patch);
}

// =============================================================================
// syncFromSupabase — time-driven trigger every 10 min — full reconciliation
// =============================================================================
// Catches any drift: manual Supabase edits/deletes that didn't fire a webhook,
// or cases where the webhook fired but doPost had a transient error.
function syncFromSupabase() {
  const props   = PropertiesService.getScriptProperties();
  const baseUrl = props.getProperty('SUPABASE_URL');
  const svcKey  = props.getProperty('SUPABASE_SERVICE_KEY');
  if (!baseUrl || !svcKey) return;

  let leads;
  try {
    const resp = UrlFetchApp.fetch(
      `${baseUrl}/rest/v1/leads?select=id,created_at,name,email,phone,year_group,source,message,status,notes&order=created_at.desc&limit=500`,
      {
        headers: { apikey: svcKey, Authorization: `Bearer ${svcKey}` },
        muteHttpExceptions: true,
      }
    );
    if (resp.getResponseCode() !== 200) {
      logError_('syncFromSupabase', `HTTP ${resp.getResponseCode()}`, resp.getContentText().slice(0, 200));
      return;
    }
    leads = JSON.parse(resp.getContentText());
  } catch (err) {
    logError_('syncFromSupabase', err.message, '');
    return;
  }

  const ss    = SpreadsheetApp.openById(SS_ID);
  const sheet = ss.getSheetByName(LEADS_TAB);
  const lock  = LockService.getScriptLock();
  if (!lock.tryLock(25000)) return; // Skip this cycle if another sync is still running

  try {
    const lastRow = sheet.getLastRow();

    // Build  supabase_id → row  index from current Sheets data
    const idToRow = {};
    if (lastRow > 1) {
      sheet.getRange(2, C.SUPABASE_ID, lastRow - 1, 1).getValues()
        .forEach((r, i) => { if (r[0]) idToRow[r[0]] = i + 2; });
    }

    const liveIds = new Set(leads.map(l => l.id));

    // 1. Remove Sheets rows that no longer exist in Supabase (deleted remotely)
    for (let r = lastRow; r >= 2; r--) {
      const sid = sheet.getRange(r, C.SUPABASE_ID).getValue();
      if (sid && !liveIds.has(sid)) {
        sheet.deleteRow(r);
        // After deletion, rows below shift up — rebuild index for remaining leads
        for (const k in idToRow) { if (idToRow[k] > r) idToRow[k]--; }
      }
    }

    // 2. For each Supabase lead: update stale data OR append if missing
    for (const lead of leads) {
      const row = idToRow[lead.id];

      if (row) {
        // Row exists — reconcile status and notes
        const vals = sheet.getRange(row, 1, 1, C.TOTAL).getValues()[0];
        if (vals[C.STATUS - 1] !== lead.status) {
          sheet.getRange(row, C.STATUS).setValue(lead.status);
          applyStyle_(sheet, row, lead.status);
        }
        const sheetNotes = String(vals[C.NOTES - 1] ?? '');
        const remNotes   = String(lead.notes ?? '');
        if (sheetNotes !== remNotes) {
          sheet.getRange(row, C.NOTES).setValue(remNotes);
        }
      } else {
        // Missing from Sheets — add it
        const ts = Utilities.formatDate(new Date(lead.created_at), 'Australia/Sydney', 'dd/MM/yyyy HH:mm');
        sheet.appendRow([
          ts, lead.name, lead.email, lead.phone || '', lead.year_group || '',
          truncate_(lead.message || '', 300), lead.status,
          lead.notes || '', lead.id, lead.source || '',
        ]);
        const newRow = sheet.getLastRow();
        applyDropdown_(sheet, newRow);
        applyStyle_(sheet, newRow, lead.status);
        idToRow[lead.id] = newRow; // Keep index current for this loop
      }
    }

    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
}

// =============================================================================
// deleteFocusedLead — custom menu: deletes from Supabase + Sheets atomically
// =============================================================================
// Use this instead of pressing Delete on a row — it syncs both sides.
function deleteFocusedLead() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  if (sheet.getName() !== LEADS_TAB) {
    SpreadsheetApp.getUi().alert('Switch to the Leads tab first.');
    return;
  }

  const row  = sheet.getActiveRange().getRow();
  if (row <= 1) return;

  const sid   = sheet.getRange(row, C.SUPABASE_ID).getValue();
  const name  = sheet.getRange(row, C.NAME).getValue();
  const email = sheet.getRange(row, C.EMAIL).getValue();
  const ui    = SpreadsheetApp.getUi();

  const res = ui.alert(
    `Delete lead "${name}"?`,
    'Removes from Supabase and this sheet. Cannot be undone.',
    ui.ButtonSet.YES_NO
  );
  if (res !== ui.Button.YES) return;

  // Delete from Supabase first
  if (sid) {
    const props   = PropertiesService.getScriptProperties();
    const baseUrl = props.getProperty('SUPABASE_URL');
    const svcKey  = props.getProperty('SUPABASE_SERVICE_KEY');
    if (baseUrl && svcKey) {
      try {
        const resp = UrlFetchApp.fetch(`${baseUrl}/rest/v1/leads?id=eq.${sid}`, {
          method: 'DELETE',
          headers: { apikey: svcKey, Authorization: `Bearer ${svcKey}`, Prefer: 'return=minimal' },
          muteHttpExceptions: true,
        });
        if (resp.getResponseCode() >= 400) {
          logError_('deleteFocusedLead', `Supabase DELETE failed HTTP ${resp.getResponseCode()}`, sid);
        }
      } catch (err) {
        logError_('deleteFocusedLead', err.message, sid);
      }
    }
  }

  // Delete from Sheets (Supabase webhook will also fire → handleSupabaseDelete_ → idempotent)
  sheet.deleteRow(row);
  removeStudentByEmail_(SpreadsheetApp.openById(SS_ID), email);
  SpreadsheetApp.flush();
}

// =============================================================================
// Supabase REST helpers
// =============================================================================
function patchLead_(id, patch) {
  supabaseRequest_('PATCH', `/rest/v1/leads?id=eq.${id}`, patch);
}

function supabaseRequest_(method, path, body) {
  const props   = PropertiesService.getScriptProperties();
  const baseUrl = props.getProperty('SUPABASE_URL');
  const svcKey  = props.getProperty('SUPABASE_SERVICE_KEY');
  if (!baseUrl || !svcKey) return null;

  try {
    const resp = UrlFetchApp.fetch(`${baseUrl}${path}`, {
      method,
      headers: {
        apikey: svcKey,
        Authorization: `Bearer ${svcKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      payload: body ? JSON.stringify(body) : undefined,
      muteHttpExceptions: true,
    });
    if (resp.getResponseCode() >= 400) {
      logError_('supabaseRequest_', `${method} ${path} → HTTP ${resp.getResponseCode()}`, resp.getContentText().slice(0, 200));
    }
    return resp;
  } catch (err) {
    logError_('supabaseRequest_', err.message, `${method} ${path}`);
    return null;
  }
}

// =============================================================================
// Sheet helpers
// =============================================================================
function findRowById_(sheet, id) {
  if (!id) return -1;
  const last = sheet.getLastRow();
  if (last < 2) return -1;
  const ids = sheet.getRange(2, C.SUPABASE_ID, last - 1, 1).getValues().flat();
  const idx = ids.indexOf(id);
  return idx === -1 ? -1 : idx + 2;
}

function emailExists_(sheet, email) {
  const last = sheet.getLastRow();
  if (last < 2) return false;
  const emails = sheet.getRange(2, C.EMAIL, last - 1, 1).getValues().flat();
  return emails.map(String).map(s => s.toLowerCase()).includes(String(email).toLowerCase());
}

function copyToStudents_(leadsSheet, row) {
  const ss       = SpreadsheetApp.openById(SS_ID);
  const students = ss.getSheetByName(STUDENTS_TAB);
  const vals     = leadsSheet.getRange(row, 1, 1, C.TOTAL).getValues()[0];
  const email    = String(vals[C.EMAIL - 1]).toLowerCase();

  // Idempotent — skip if email already in Students
  if (students.getLastRow() > 1) {
    const existing = students.getRange(2, 2, students.getLastRow() - 1, 1).getValues().flat()
      .map(s => String(s).toLowerCase());
    if (existing.includes(email)) return;
  }

  students.appendRow([
    vals[C.NAME - 1],      // Name
    email,                 // Email
    vals[C.PHONE - 1],     // Phone
    vals[C.YEAR - 1],      // Year
    vals[C.TIMESTAMP - 1], // Enquiry Date
    '',                    // First Class Date (enter manually)
    '',                    // Notes
    '',                    // spare
    vals[C.SUPABASE_ID - 1], // SupabaseID for reference
  ]);
  const r = students.getLastRow();
  students.getRange(r, 1, 1, 9).setBackground('#e6f4ea').setFontColor('#1f6b40');
}

function removeStudentByEmail_(ss, email) {
  const students = ss.getSheetByName(STUDENTS_TAB);
  if (!students || students.getLastRow() < 2) return;
  const emails = students.getRange(2, 2, students.getLastRow() - 1, 1).getValues().flat();
  for (let i = emails.length - 1; i >= 0; i--) {
    if (String(emails[i]).toLowerCase() === String(email).toLowerCase()) {
      students.deleteRow(i + 2);
    }
  }
}

function applyDropdown_(sheet, row) {
  sheet.getRange(row, C.STATUS).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build()
  );
}

function applyStyle_(sheet, row, status) {
  const c = COLOURS[status] || COLOURS.new;
  const r = sheet.getRange(row, 1, 1, C.TOTAL);
  r.setBackground(c.bg).setFontColor(c.font).setFontStyle('normal').setFontWeight('normal');
  if (status === 'disqualified') {
    r.setFontStyle('italic');
    sheet.getRange(row, C.STATUS).setFontWeight('bold');
  }
}

function truncate_(s, n) {
  return s.length <= n ? s : s.slice(0, n) + '…';
}

function jsonResp_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// =============================================================================
// Error log — appends to Errors tab so you can see what broke
// =============================================================================
function logError_(fn, message, context) {
  try {
    const ss     = SpreadsheetApp.openById(SS_ID);
    let errors   = ss.getSheetByName(ERRORS_TAB);
    if (!errors) errors = ss.insertSheet(ERRORS_TAB);
    errors.appendRow([
      Utilities.formatDate(new Date(), 'Australia/Sydney', 'dd/MM/yyyy HH:mm:ss'),
      fn, message, context,
    ]);
  } catch (_) {
    Logger.log(`[ERROR] ${fn}: ${message}`);
  }
}

// =============================================================================
// installTriggers — run once from the Acumen menu
// =============================================================================
function installTriggers() {
  // Remove all existing project triggers first to avoid duplicates
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  // Installable onEdit — runs as you, so UrlFetchApp works (unlike simple trigger)
  ScriptApp.newTrigger('onLeadEdit')
    .forSpreadsheet(SS_ID)
    .onEdit()
    .create();

  // Full reconciliation every 10 minutes — catches any sync drift
  ScriptApp.newTrigger('syncFromSupabase')
    .timeBased()
    .everyMinutes(10)
    .create();

  Logger.log('Triggers installed: onLeadEdit (onEdit) + syncFromSupabase (every 10 min)');
}

// =============================================================================
// setupSheets — run once from the Acumen menu
// =============================================================================
function setupSheets() {
  const ss = SpreadsheetApp.openById(SS_ID);

  // ── Leads ──────────────────────────────────────────────────────────────────
  let leads = ss.getSheetByName(LEADS_TAB) || ss.insertSheet(LEADS_TAB);
  if (leads.getLastRow() === 0) {
    leads.appendRow(['Timestamp','Name','Email','Phone','Year','Message','Status','Notes','SupabaseID','Source']);
  } else {
    leads.getRange(1, 1, 1, C.TOTAL).setValues([['Timestamp','Name','Email','Phone','Year','Message','Status','Notes','SupabaseID','Source']]);
  }
  leads.getRange(1, 1, 1, C.TOTAL).setFontWeight('bold').setBackground('#0a0a0a').setFontColor('#ffffff');
  leads.setFrozenRows(1);
  leads.setColumnWidth(C.TIMESTAMP,   130);
  leads.setColumnWidth(C.MESSAGE,     260);
  leads.setColumnWidth(C.STATUS,      120);
  leads.setColumnWidth(C.NOTES,       220);
  leads.setColumnWidth(C.SUPABASE_ID,  80);
  leads.setColumnWidth(C.SOURCE,      110);

  // ── Active Students ────────────────────────────────────────────────────────
  let students = ss.getSheetByName(STUDENTS_TAB) || ss.insertSheet(STUDENTS_TAB);
  if (students.getLastRow() === 0) {
    students.appendRow(['Name','Email','Phone','Year','Enquiry Date','First Class Date','Notes','','SupabaseID']);
  }
  students.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#1f6b40').setFontColor('#ffffff');
  students.setFrozenRows(1);
  students.setColumnWidth(5, 130);
  students.setColumnWidth(6, 140);
  students.setColumnWidth(7, 220);
  students.setColumnWidth(9, 80);

  // ── Errors ─────────────────────────────────────────────────────────────────
  let errors = ss.getSheetByName(ERRORS_TAB) || ss.insertSheet(ERRORS_TAB);
  if (errors.getLastRow() === 0) {
    errors.appendRow(['Timestamp','Function','Message','Context']);
    errors.getRange(1, 1, 1, 4).setFontWeight('bold').setBackground('#d32f2f').setFontColor('#ffffff');
  }

  SpreadsheetApp.flush();
  Logger.log('Sheet setup complete.');
}

// =============================================================================
// onOpen — adds the Acumen menu to the spreadsheet toolbar
// =============================================================================
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Acumen')
    .addItem('Set up sheets',            'setupSheets')
    .addItem('Install triggers',         'installTriggers')
    .addItem('Sync from Supabase now',   'syncFromSupabase')
    .addSeparator()
    .addItem('Delete focused lead',      'deleteFocusedLead')
    .addToUi();
}
