export default function DashboardSubscriptionPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Subscription</h1>
      <p className="muted">Basic monthly plan management (MVP).</p>

      <article className="card panel-pad">
        <p><strong>Current Plan:</strong> Basic Monthly</p>
        <p><strong>Renewal Date:</strong> 2026-03-20</p>
        <p><strong>Billing Status:</strong> Active</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <button className="btn btn-primary" type="button">Upgrade</button>
          <button className="btn btn-outline" type="button">Cancel</button>
        </div>
      </article>
    </section>
  );
}
