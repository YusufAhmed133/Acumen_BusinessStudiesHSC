import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

const S = {
  page:    { maxWidth: 720, margin: "0 auto", padding: "72px 28px 96px" } as React.CSSProperties,
  h1:      { fontWeight: 700, fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.03em", color: "#111", margin: "0 0 8px" } as React.CSSProperties,
  date:    { fontSize: 12, color: "#9a9a9a", fontWeight: 500, letterSpacing: "0.04em", marginBottom: 48, display: "block" } as React.CSSProperties,
  h2:      { fontWeight: 700, fontSize: 16, color: "#111", margin: "40px 0 10px", letterSpacing: "-0.01em" } as React.CSSProperties,
  p:       { fontSize: 14.5, lineHeight: 1.75, color: "#444", margin: "0 0 12px" } as React.CSSProperties,
  divider: { border: "none", borderTop: "1px solid #f0f0f0", margin: "40px 0 0" } as React.CSSProperties,
};

export default function TermsPage() {
  return (
    <div style={S.page}>
      <h1 style={S.h1}>Terms of Service</h1>
      <span style={S.date}>Last updated: May 2026</span>

      <p style={S.p}>
        These terms apply to all tutoring sessions delivered by Acumen HSC (&ldquo;Acumen&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
        By booking a session or submitting an enquiry, you agree to the following.
      </p>

      <h2 style={S.h2}>1. Cancellations and Rescheduling</h2>
      <p style={S.p}>
        You may cancel or reschedule a session at no charge by giving at least 24 hours&apos; notice before the scheduled start time.
        While you are entitled to cancel with 24 hours notice, we strongly recommend committing to at least three sessions
        with a new tutor before assessing suitability.
      </p>
      <p style={S.p}>
        If you provide less than 24 hours&apos; notice, or do not attend without notice (no-show), the full session fee is payable.
        We may waive this at our discretion in exceptional circumstances; any waiver must be confirmed in writing to be effective.
      </p>

      <h2 style={S.h2}>2. Fees and What Is Included</h2>
      <p style={S.p}>
        Current rates are $110 per individual one-hour session, or $950 for a full school term (approximately 10 sessions).
        Unless otherwise agreed in writing, each session fee covers: delivery of the scheduled lesson, reasonable preparation
        directly connected to that lesson, and two written progress reports per school term (issued at the start and end of term).
      </p>
      <p style={S.p}>
        Marking, questions, or communication outside of sessions is not included unless otherwise agreed or included in your
        tutoring package.
      </p>

      <h2 style={S.h2}>3. Payment</h2>
      <p style={S.p}>
        Invoices are issued within one week of the end of each month and must be paid within 21 days of the invoice date.
        If payment is not received within 21 days, an additional $15 invoice handling fee will apply.
      </p>
      <p style={S.p}>
        Payment is accepted by card only. A 1% card processing fee applies to all transactions. Bank transfer is not accepted.
      </p>

      <h2 style={S.h2}>4. Fee Changes</h2>
      <p style={S.p}>
        We may vary our fees or pricing structure by giving at least four weeks&apos; written notice before the change takes effect.
      </p>

      <h2 style={S.h2}>5. Communications</h2>
      <p style={S.p}>
        By submitting an enquiry or booking a session, you agree to receive communications from Acumen HSC including updates,
        invoices, pricing changes, and relevant educational content. You may opt out of marketing communications at any time
        by contacting us at{" "}
        <a href="tel:0470665141" style={{ color: "#111", fontWeight: 600 }}>0470 665 141</a>.
      </p>

      <h2 style={S.h2}>6. Intellectual Property</h2>
      <p style={S.p}>
        Any materials, notes, or resources provided by Acumen HSC are for your personal educational use only. They may not
        be reproduced, shared, or distributed without our written consent.
      </p>

      <h2 style={S.h2}>7. Limitation of Liability</h2>
      <p style={S.p}>
        Acumen HSC provides tutoring support and cannot guarantee specific academic outcomes. To the extent permitted by
        Australian law, our liability is limited to the fees paid for the sessions in question.
      </p>

      <hr style={S.divider} />
      <p style={{ ...S.p, marginTop: 32, color: "#9a9a9a", fontSize: 13 }}>
        Questions? Call{" "}
        <a href="tel:0470665141" style={{ color: "#9a9a9a" }}>0470 665 141</a>{" "}
        or email{" "}
        <a href="mailto:hello@acumenhsc.com.au" style={{ color: "#9a9a9a" }}>hello@acumenhsc.com.au</a>.
      </p>
    </div>
  );
}
