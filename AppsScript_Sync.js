// =============================================================================
// Acumen HSC — Google Apps Script v2
// Bi-directional Supabase ↔ Sheets sync with full colour coding + admin tools
// =============================================================================
//
// SETUP (run in this order):
//   1. Extensions → Apps Script → Project settings → Script properties — add:
//        SUPABASE_URL         = https://<ref>.supabase.co
//        SUPABASE_SERVICE_KEY = <service_role_key>  ← NOT the anon key
//        WEBHOOK_SECRET       = <any random string, e.g. openssl rand -hex 20>
//
//   2. Deploy as web app:
//        Execute as: Me  |  Who has access: Anyone
//        Copy the URL → this is your NOTIFY_WEBHOOK_URL
//        Append  ?secret=<WEBHOOK_SECRET>  to the URL before saving to Vercel
//
//   3. Vercel env vars to set:
//        NOTIFY_WEBHOOK_URL      = <web app URL>?secret=<secret>
//
//   4. In Supabase dashboard → Database → Webhooks → New webhook:
//        Table: leads  |  Events: UPDATE, DELETE
//        URL: <same web app URL>?secret=<secret>
//        Headers: Content-Type: application/json
//
//   5. Open the Google Sheet → Acumen menu → "Set up sheets"
//   6. Acumen menu → "Install triggers"
//
// =============================================================================

const SS_ID        = '1g70ENNhQwcQ222qdNIsWT9uNjrzNpLOUGghsM2w--_s';
const LEADS_TAB    = 'Leads';
const STUDENTS_TAB = 'Active Students';
const ERRORS_TAB   = 'Errors';
const STATS_TAB    = 'Stats';

// Column indices (1-based)
const C = {
  TIMESTAMP:    1,
  NAME:         2,
  EMAIL:        3,
  PHONE:        4,
  YEAR:         5,
  MESSAGE:      6,
  STATUS:       7,
  NOTES:        8,
  SUPABASE_ID:  9,
  SOURCE:       10,
  CONTACTED_AT: 11,  // hidden — stores ISO timestamp of when status → contacted
};
const TOTAL_COLS = 11;

const STATUSES = ['new', 'contacted', 'converted', 'disqualified'];

// Row background + font per status
const STATUS_COLOURS = {
  new:          { bg: '#ffffff', font: '#1a1a1a' },
  contacted:    { bg: '#fff8e1', font: '#7b5800' },
  converted:    { bg: '#e6f4ea', font: '#1f6b40' },
  disqualified: { bg: '#fce8e6', font: '#c0392b' },
};

// Source cell background (column J only — row colour stays status-driven)
const SOURCE_COLOURS = {
  hero_form:     '#e3f2fd',   // blue tint
  contact_form:  '#f3e5f5',   // purple tint
  resource_gate: '#fff3e0',   // amber tint
  footer_form:   '#e8f5e9',   // green tint
  other:         '#f5f5f5',   // grey
};

function sheetSafe_(value) {
  const text = String(value ?? '');
  return /^[\s]*[=+\-@]/.test(text) ? `'${text}` : text;
}

function safeContext_(context) {
  if (!context) return '';
  return String(context)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[email]')
    .replace(/\+?\d[\d\s().-]{6,}\d/g, '[phone]')
    .slice(0, 300);
}

// =============================================================================
// doPost — single entry point for all inbound events
// =============================================================================
function doPost(e) {
  try {
    // Validate shared secret (sent as ?secret= query param from both Next.js and Supabase)
    const expected = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');
    if (!expected) {
      logError_('doPost', 'WEBHOOK_SECRET not configured', 'blocked_public_webhook');
      return jsonResp_({ ok: false, error: 'Webhook not configured' });
    }
    const received = e.parameter && e.parameter.secret;
    if (received !== expected) return jsonResp_({ ok: false, error: 'Unauthorized' });

    const raw = JSON.parse(e.postData.contents);
    const ss  = SpreadsheetApp.openById(SS_ID);

    if (raw.type === 'new_lead')                              return handleNewLead_(ss, raw);
    if (raw.type === 'UPDATE' && raw.table === 'leads')       return handleSupabaseUpdate_(ss, raw.record, raw.old_record);
    if (raw.type === 'DELETE' && raw.table === 'leads')       return handleSupabaseDelete_(ss, raw.old_record);
    if (raw.name && raw.email && !raw.type)                   return handleNewLead_(ss, { type: 'new_lead', id: null, ...raw });

    return jsonResp_({ ok: true, skipped: true });
  } catch (err) {
    logError_('doPost', err.message, safeContext_('invalid_payload'));
    return jsonResp_({ ok: false, error: 'Webhook failed' });
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
    if (data.id && findRowById_(sheet, data.id) > 1)    return jsonResp_({ ok: true, skipped: 'duplicate_id' });
    if (!data.id && emailExists_(sheet, data.email))     return jsonResp_({ ok: true, skipped: 'duplicate_email' });

    const ts = Utilities.formatDate(
      new Date(data.submitted_at || new Date()), 'Australia/Sydney', 'dd/MM/yyyy HH:mm'
    );

    sheet.appendRow([
      ts,
      sheetSafe_(data.name),
      sheetSafe_(String(data.email || '').toLowerCase()),
      sheetSafe_(data.phone),
      sheetSafe_(data.year_group),
      sheetSafe_(truncate_(data.message || '', 300)),
      'new',
      '',                          // Notes
      sheetSafe_(data.id),         // SupabaseID
      sheetSafe_(data.source || 'hero_form'),
      '',                          // contacted_at (hidden)
    ]);

    const r = sheet.getLastRow();
    applyDropdown_(sheet, r);
    applyRowStyle_(sheet, r, 'new');
    applySourceColour_(sheet, r, data.source || 'hero_form');
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
  return jsonResp_({ ok: true });
}

// =============================================================================
// B. Supabase UPDATE → reflect in Sheets
// =============================================================================
function handleSupabaseUpdate_(ss, record, oldRecord) {
  const sheet = ss.getSheetByName(LEADS_TAB);
  const row   = findRowById_(sheet, record.id);

  if (row <= 1) {
    if (record.name && record.email) {
      return handleNewLead_(ss, { type: 'new_lead', ...record, submitted_at: record.created_at });
    }
    return jsonResp_({ ok: true, skipped: 'row_not_found' });
  }

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) return jsonResp_({ ok: false, error: 'Lock timeout' });

  try {
    // Set flag so onLeadEdit knows this write came from Supabase, not a human
    setSyncing_();

    const current = sheet.getRange(row, 1, 1, TOTAL_COLS).getValues()[0];
    const oldStatus = current[C.STATUS - 1];

    if (record.status && oldStatus !== record.status) {
      sheet.getRange(row, C.STATUS).setValue(record.status);
      applyRowStyle_(sheet, row, record.status);

      if (record.status === 'converted')                              copyToStudents_(sheet, row);
      if (oldStatus === 'converted' && record.status !== 'converted') removeStudentByEmail_(ss, record.email);

      if (record.status === 'contacted' && !current[C.CONTACTED_AT - 1]) {
        sheet.getRange(row, C.CONTACTED_AT).setValue(new Date().toISOString());
      }
    }

    const newNotes = record.notes ?? '';
    if (newNotes !== String(current[C.NOTES - 1] ?? '')) {
      sheet.getRange(row, C.NOTES).setValue(sheetSafe_(newNotes));
    }

    SpreadsheetApp.flush();
  } finally {
    clearSyncing_();
    lock.releaseLock();
  }
  return jsonResp_({ ok: true });
}

// =============================================================================
// C. Supabase DELETE → remove from Sheets (and Students tab)
// =============================================================================
function handleSupabaseDelete_(ss, oldRecord) {
  const sheet = ss.getSheetByName(LEADS_TAB);
  const row   = findRowById_(sheet, oldRecord.id);

  if (row > 1) { sheet.deleteRow(row); SpreadsheetApp.flush(); }
  if (oldRecord.email) removeStudentByEmail_(ss, oldRecord.email);

  return jsonResp_({ ok: true });
}

// =============================================================================
// onLeadEdit — installable trigger: human Sheets edit → Supabase PATCH
// =============================================================================
function onLeadEdit(e) {
  // Skip if this edit was made programmatically by this script (loop prevention)
  if (isSyncing_()) return;

  const sheet = e.range.getSheet();
  if (sheet.getName() !== LEADS_TAB) return;

  const col = e.range.getColumn();
  const row = e.range.getRow();
  if (row <= 1) return;

  const isStatus = col === C.STATUS;
  const isNotes  = col === C.NOTES;
  if (!isStatus && !isNotes) return;

  // Apply visual changes immediately — no API round-trip needed
  if (isStatus) {
    const newStatus  = String(e.value || '').toLowerCase().trim();
    const oldStatus  = String(e.oldValue || '').toLowerCase().trim();

    applyRowStyle_(sheet, row, newStatus);

    if (newStatus === 'converted')                              copyToStudents_(sheet, row);
    if (oldStatus === 'converted' && newStatus !== 'converted') {
      const email = sheet.getRange(row, C.EMAIL).getValue();
      removeStudentByEmail_(SpreadsheetApp.openById(SS_ID), email);
    }

    // Timestamp when first moved to contacted
    if (newStatus === 'contacted') {
      const existing = sheet.getRange(row, C.CONTACTED_AT).getValue();
      if (!existing) sheet.getRange(row, C.CONTACTED_AT).setValue(new Date().toISOString());
    }
  }

  const sid = sheet.getRange(row, C.SUPABASE_ID).getValue();
  if (!sid) return;

  const patch = {};
  if (isStatus) {
    patch.status = String(e.value || '').toLowerCase().trim();
    if (patch.status === 'contacted') patch.contacted_at = new Date().toISOString();
  }
  if (isNotes) patch.notes = String(e.value || '');

  const resp = patchLead_(sid, patch);

  // Toast the admin if the PATCH failed (e.g. bad service key, network issue)
  if (!resp || resp.getResponseCode() >= 400) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Supabase sync failed — change saved locally. Will retry in 10 min.',
      'Sync warning', 8
    );
  }
}

// =============================================================================
// syncFromSupabase — time-driven: full reconciliation every 10 min
// Handles: remote deletes, remote status edits, missed webhooks, pagination
// =============================================================================
function syncFromSupabase() {
  const props   = PropertiesService.getScriptProperties();
  const baseUrl = props.getProperty('SUPABASE_URL');
  const svcKey  = props.getProperty('SUPABASE_SERVICE_KEY');
  if (!baseUrl || !svcKey) return;

  // Paginated fetch — 500 per page
  const allLeads = [];
  let offset     = 0;
  const pageSize = 500;

  while (true) {
    let resp;
    try {
      resp = UrlFetchApp.fetch(
        `${baseUrl}/rest/v1/leads?select=id,created_at,name,email,phone,year_group,source,message,status,notes,contacted_at&order=created_at.desc&limit=${pageSize}&offset=${offset}`,
        { headers: { apikey: svcKey, Authorization: `Bearer ${svcKey}` }, muteHttpExceptions: true }
      );
    } catch (err) {
      logError_('syncFromSupabase', err.message, `offset=${offset}`);
      break;
    }

    if (resp.getResponseCode() !== 200) {
      logError_('syncFromSupabase', `HTTP ${resp.getResponseCode()}`, resp.getContentText().slice(0, 200));
      break;
    }

    const page = JSON.parse(resp.getContentText());
    allLeads.push(...page);
    if (page.length < pageSize) break;
    offset += pageSize;
  }

  if (!allLeads.length) return;

  const ss    = SpreadsheetApp.openById(SS_ID);
  const sheet = ss.getSheetByName(LEADS_TAB);
  const lock  = LockService.getScriptLock();
  if (!lock.tryLock(30000)) return;

  try {
    setSyncing_();
    const lastRow = sheet.getLastRow();
    const idToRow = {};

    if (lastRow > 1) {
      sheet.getRange(2, C.SUPABASE_ID, lastRow - 1, 1).getValues()
        .forEach((r, i) => { if (r[0]) idToRow[r[0]] = i + 2; });
    }

    const liveIds = new Set(allLeads.map(l => l.id));

    // Delete rows whose Supabase record no longer exists
    for (let r = sheet.getLastRow(); r >= 2; r--) {
      const sid = sheet.getRange(r, C.SUPABASE_ID).getValue();
      if (sid && !liveIds.has(sid)) {
        sheet.deleteRow(r);
        for (const k in idToRow) { if (idToRow[k] > r) idToRow[k]--; }
      }
    }

    // Reconcile or append each Supabase lead
    for (const lead of allLeads) {
      const row = idToRow[lead.id];
      if (row) {
        const vals = sheet.getRange(row, 1, 1, TOTAL_COLS).getValues()[0];

        if (vals[C.STATUS - 1] !== lead.status) {
          const oldStatus = String(vals[C.STATUS - 1]);
          sheet.getRange(row, C.STATUS).setValue(lead.status);
          applyRowStyle_(sheet, row, lead.status);
          if (lead.status === 'converted')                         copyToStudents_(sheet, row);
          if (oldStatus === 'converted' && lead.status !== 'converted') removeStudentByEmail_(ss, lead.email);
        }

        const remNotes = String(lead.notes ?? '');
        if (String(vals[C.NOTES - 1] ?? '') !== remNotes) {
          sheet.getRange(row, C.NOTES).setValue(remNotes);
        }

        if (lead.contacted_at && !vals[C.CONTACTED_AT - 1]) {
          sheet.getRange(row, C.CONTACTED_AT).setValue(lead.contacted_at);
        }
      } else {
        const ts = Utilities.formatDate(new Date(lead.created_at), 'Australia/Sydney', 'dd/MM/yyyy HH:mm');
        sheet.appendRow([
          ts, sheetSafe_(lead.name), sheetSafe_(lead.email), sheetSafe_(lead.phone || ''), sheetSafe_(lead.year_group || ''),
          sheetSafe_(truncate_(lead.message || '', 300)), lead.status,
          sheetSafe_(lead.notes || ''), sheetSafe_(lead.id), sheetSafe_(lead.source || ''),
          lead.contacted_at || '',
        ]);
        const newRow = sheet.getLastRow();
        applyDropdown_(sheet, newRow);
        applyRowStyle_(sheet, newRow, lead.status);
        applySourceColour_(sheet, newRow, lead.source || 'other');
        idToRow[lead.id] = newRow;
      }
    }

    refreshStats_(ss);
    SpreadsheetApp.flush();
  } finally {
    clearSyncing_();
    lock.releaseLock();
  }
}

// =============================================================================
// deleteFocusedLead — Acumen menu: deletes from Supabase AND Sheets atomically
// =============================================================================
function deleteFocusedLead() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  if (sheet.getName() !== LEADS_TAB) {
    SpreadsheetApp.getUi().alert('Switch to the Leads tab first.'); return;
  }

  const row   = sheet.getActiveRange().getRow();
  if (row <= 1) return;

  const sid   = sheet.getRange(row, C.SUPABASE_ID).getValue();
  const name  = sheet.getRange(row, C.NAME).getValue();
  const email = sheet.getRange(row, C.EMAIL).getValue();
  const ui    = SpreadsheetApp.getUi();

  if (ui.alert(`Delete "${name}"?`, 'Removes from Supabase and this sheet. Cannot be undone.', ui.ButtonSet.YES_NO) !== ui.Button.YES) return;

  if (sid) {
    const resp = supabaseRequest_('DELETE', `/rest/v1/leads?id=eq.${sid}`, null);
    if (!resp || resp.getResponseCode() >= 400) {
      ss.toast('Supabase delete failed — lead not removed from database.', 'Error', 8); return;
    }
  }

  sheet.deleteRow(row);
  removeStudentByEmail_(ss, email);
  SpreadsheetApp.flush();
  ss.toast(`"${name}" deleted from Supabase and Sheets.`, 'Done', 4);
}

// =============================================================================
// refreshStats_ — writes summary counts to the Stats tab
// =============================================================================
function refreshStats_(ss) {
  try {
    let stats = ss.getSheetByName(STATS_TAB);
    if (!stats) return; // Only runs if setupSheets() created the tab

    const sheet   = ss.getSheetByName(LEADS_TAB);
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) { stats.getRange('B2:B5').clearContent(); return; }

    const statuses = sheet.getRange(2, C.STATUS, lastRow - 1, 1).getValues().flat();
    const counts   = { new: 0, contacted: 0, converted: 0, disqualified: 0 };
    statuses.forEach(s => { if (counts[s] !== undefined) counts[s]++; });

    stats.getRange('B2').setValue(counts.new);
    stats.getRange('B3').setValue(counts.contacted);
    stats.getRange('B4').setValue(counts.converted);
    stats.getRange('B5').setValue(counts.disqualified);
    stats.getRange('B6').setValue(lastRow - 1);
    stats.getRange('B7').setValue(Utilities.formatDate(new Date(), 'Australia/Sydney', 'dd/MM/yyyy HH:mm'));
  } catch (_) {}
}

// =============================================================================
// Supabase REST helpers
// =============================================================================
function patchLead_(id, patch) {
  return supabaseRequest_('PATCH', `/rest/v1/leads?id=eq.${id}`, patch);
}

function supabaseRequest_(method, path, body) {
  const props   = PropertiesService.getScriptProperties();
  const baseUrl = props.getProperty('SUPABASE_URL');
  const svcKey  = props.getProperty('SUPABASE_SERVICE_KEY');
  if (!baseUrl || !svcKey) return null;

  try {
    const opts = {
      method,
      headers: {
        apikey: svcKey,
        Authorization: `Bearer ${svcKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      muteHttpExceptions: true,
    };
    if (body) opts.payload = JSON.stringify(body);
    const resp = UrlFetchApp.fetch(`${baseUrl}${path}`, opts);
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
// Loop prevention — 10-second SYNCING flag in Script Properties
// Prevents onLeadEdit from PATCHing Supabase when a programmatic write triggered the edit event
// =============================================================================
function setSyncing_() {
  PropertiesService.getScriptProperties().setProperty('SYNCING_TS', String(Date.now()));
}
function clearSyncing_() {
  PropertiesService.getScriptProperties().deleteProperty('SYNCING_TS');
}
function isSyncing_() {
  const ts = PropertiesService.getScriptProperties().getProperty('SYNCING_TS');
  return ts && (Date.now() - Number(ts)) < 10000;
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
  return sheet.getRange(2, C.EMAIL, last - 1, 1).getValues().flat()
    .map(String).map(s => s.toLowerCase())
    .includes(String(email).toLowerCase());
}

function copyToStudents_(leadsSheet, row) {
  const ss       = SpreadsheetApp.openById(SS_ID);
  const students = ss.getSheetByName(STUDENTS_TAB);
  const vals     = leadsSheet.getRange(row, 1, 1, TOTAL_COLS).getValues()[0];
  const email    = String(vals[C.EMAIL - 1]).toLowerCase();

  if (students.getLastRow() > 1) {
    const existing = students.getRange(2, 2, students.getLastRow() - 1, 1).getValues().flat()
      .map(s => String(s).toLowerCase());
    if (existing.includes(email)) return;
  }

  students.appendRow([
    sheetSafe_(vals[C.NAME - 1]), sheetSafe_(email), sheetSafe_(vals[C.PHONE - 1]), sheetSafe_(vals[C.YEAR - 1]),
    vals[C.TIMESTAMP - 1], '', '', '', vals[C.SUPABASE_ID - 1],
  ]);
  const r = students.getLastRow();
  students.getRange(r, 1, 1, 9).setBackground('#e6f4ea').setFontColor('#1f6b40');
}

function removeStudentByEmail_(ss, email) {
  const students = ss.getSheetByName(STUDENTS_TAB);
  if (!students || students.getLastRow() < 2) return;
  const emails = students.getRange(2, 2, students.getLastRow() - 1, 1).getValues().flat();
  for (let i = emails.length - 1; i >= 0; i--) {
    if (String(emails[i]).toLowerCase() === String(email).toLowerCase()) students.deleteRow(i + 2);
  }
}

function applyDropdown_(sheet, row) {
  sheet.getRange(row, C.STATUS).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build()
  );
}

function applyRowStyle_(sheet, row, status) {
  const c = STATUS_COLOURS[status] || STATUS_COLOURS.new;
  const r = sheet.getRange(row, 1, 1, TOTAL_COLS);
  r.setBackground(c.bg).setFontColor(c.font).setFontStyle('normal').setFontWeight('normal');

  // Bold name for unactioned new leads — draws the eye
  sheet.getRange(row, C.NAME).setFontWeight(status === 'new' ? 'bold' : 'normal');

  // Strikethrough name for disqualified leads
  const nameCell  = sheet.getRange(row, C.NAME);
  const textStyle = SpreadsheetApp.newTextStyle()
    .setStrikethrough(status === 'disqualified')
    .build();
  nameCell.setTextStyle(textStyle);

  if (status === 'disqualified') {
    r.setFontStyle('italic');
    sheet.getRange(row, C.STATUS).setFontWeight('bold');
  }
}

function applySourceColour_(sheet, row, source) {
  const bg = SOURCE_COLOURS[source] || SOURCE_COLOURS.other;
  sheet.getRange(row, C.SOURCE).setBackground(bg);
}

function truncate_(s, n) {
  return String(s).length <= n ? s : String(s).slice(0, n) + '…';
}

function jsonResp_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// =============================================================================
// Error log — red Errors tab for debugging
// =============================================================================
function logError_(fn, message, context) {
  try {
    const ss     = SpreadsheetApp.openById(SS_ID);
    let errors   = ss.getSheetByName(ERRORS_TAB);
    if (!errors) errors = ss.insertSheet(ERRORS_TAB);
    errors.appendRow([
      Utilities.formatDate(new Date(), 'Australia/Sydney', 'dd/MM/yyyy HH:mm:ss'),
      fn, message, safeContext_(context),
    ]);
  } catch (_) { Logger.log(`[ERROR] ${fn}: ${message}`); }
}

// =============================================================================
// installTriggers — run once from Acumen menu
// =============================================================================
function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));

  ScriptApp.newTrigger('onLeadEdit')
    .forSpreadsheet(SS_ID).onEdit().create();

  ScriptApp.newTrigger('syncFromSupabase')
    .timeBased().everyMinutes(10).create();

  Logger.log('Triggers installed.');
}

// =============================================================================
// setupSheets — run once from Acumen menu
// Creates/repairs all tabs with correct headers, widths, freezes, and formatting
// =============================================================================
function setupSheets() {
  const ss = SpreadsheetApp.openById(SS_ID);

  // ── Leads ──────────────────────────────────────────────────────────────────
  let leads = ss.getSheetByName(LEADS_TAB) || ss.insertSheet(LEADS_TAB);
  const headers = ['Timestamp','Name','Email','Phone','Year','Message','Status','Notes','SupabaseID','Source','contacted_at'];
  if (leads.getLastRow() === 0) leads.appendRow(headers);
  else leads.getRange(1, 1, 1, TOTAL_COLS).setValues([headers]);

  leads.getRange(1, 1, 1, TOTAL_COLS)
    .setFontWeight('bold').setBackground('#0a0a0a').setFontColor('#ffffff');
  leads.setFrozenRows(1);
  leads.setFrozenColumns(3);                                  // Pin Timestamp + Name + Email

  leads.setColumnWidth(C.TIMESTAMP,    130);
  leads.setColumnWidth(C.NAME,         140);
  leads.setColumnWidth(C.EMAIL,        190);
  leads.setColumnWidth(C.PHONE,        120);
  leads.setColumnWidth(C.YEAR,          80);
  leads.setColumnWidth(C.MESSAGE,      260);
  leads.setColumnWidth(C.STATUS,       120);
  leads.setColumnWidth(C.NOTES,        220);
  leads.setColumnWidth(C.SUPABASE_ID,   80);
  leads.setColumnWidth(C.SOURCE,       110);
  leads.setColumnWidth(C.CONTACTED_AT, 140);
  leads.hideColumns(C.SUPABASE_ID);                           // Hidden — accessible via formula/script, not cluttering view
  leads.hideColumns(C.CONTACTED_AT);                          // Hidden — surfaced via "Contacted today" conditional format

  // Conditional format: amber left border on rows contacted today
  // (reads hidden contacted_at col K — today's date check via DATEVALUE)
  const todayRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND(K2<>"",INT(DATEVALUE(TEXT(K2,"yyyy-mm-dd")))=INT(TODAY()))`)
    .setBackground('#fffde7')
    .setBold(true)
    .setRanges([leads.getRange('B2:B1000')])
    .build();
  leads.setConditionalFormatRules([todayRule]);

  // ── Active Students ────────────────────────────────────────────────────────
  let students = ss.getSheetByName(STUDENTS_TAB) || ss.insertSheet(STUDENTS_TAB);
  if (students.getLastRow() === 0) {
    students.appendRow(['Name','Email','Phone','Year','Enquiry Date','First Class Date','Notes','','SupabaseID']);
  }
  students.getRange(1,1,1,9).setFontWeight('bold').setBackground('#1f6b40').setFontColor('#ffffff');
  students.setFrozenRows(1);
  students.setColumnWidth(5,130); students.setColumnWidth(6,140);
  students.setColumnWidth(7,220); students.setColumnWidth(9,80);
  students.hideColumns(9);

  // ── Stats ──────────────────────────────────────────────────────────────────
  let statsSheet = ss.getSheetByName(STATS_TAB) || ss.insertSheet(STATS_TAB);
  statsSheet.clearContents(); statsSheet.clearFormats();
  const statsData = [
    ['Acumen HSC — Lead Stats', ''],
    ['New',          0],
    ['Contacted',    0],
    ['Converted',    0],
    ['Disqualified', 0],
    ['Total',        0],
    ['Last synced',  ''],
  ];
  statsSheet.getRange(1, 1, statsData.length, 2).setValues(statsData);
  statsSheet.getRange(1, 1).setFontWeight('bold').setFontSize(13).setBackground('#0a0a0a').setFontColor('#ffffff');
  statsSheet.getRange(2,1).setFontColor('#1a1a1a');
  statsSheet.getRange(3,1).setFontColor('#7b5800').setBackground('#fff8e1');
  statsSheet.getRange(4,1).setFontColor('#1f6b40').setBackground('#e6f4ea');
  statsSheet.getRange(5,1).setFontColor('#c0392b').setBackground('#fce8e6');
  statsSheet.getRange(2,1,4,1).setFontWeight('bold');
  statsSheet.setColumnWidth(1, 130); statsSheet.setColumnWidth(2, 80);

  // ── Errors ─────────────────────────────────────────────────────────────────
  let errors = ss.getSheetByName(ERRORS_TAB) || ss.insertSheet(ERRORS_TAB);
  if (errors.getLastRow() === 0) {
    errors.appendRow(['Timestamp','Function','Message','Context']);
    errors.getRange(1,1,1,4).setFontWeight('bold').setBackground('#c62828').setFontColor('#ffffff');
  }

  SpreadsheetApp.flush();
  SpreadsheetApp.getActiveSpreadsheet().toast('Setup complete. Now run "Install triggers".', 'Acumen', 6);
}

// =============================================================================
// onOpen — custom menu
// =============================================================================
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Acumen')
    .addItem('Set up sheets',            'setupSheets')
    .addItem('Install triggers',         'installTriggers')
    .addItem('Sync from Supabase now',   'syncFromSupabase')
    .addSeparator()
    .addItem('Delete focused lead',      'deleteFocusedLead')
    .addItem('Show SupabaseID column',   'showSupabaseIdColumn_')
    .addToUi();
}

function showSupabaseIdColumn_() {
  const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LEADS_TAB);
  if (sheet) sheet.showColumns(C.SUPABASE_ID);
}
