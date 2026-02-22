import { ngn } from '@/components/ui/format';

export default function DashboardSubscriptionPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Subscription</h1>
      <article className="card panel-pad">
        <h3>Current Plan</h3>
        <p><strong>Plan:</strong> Basic Monthly</p>
        <p><strong>Renewal Date:</strong> 2026-03-20</p>
        <p><strong>Price:</strong> {ngn(15000)} / month</p>
        <p><strong>Status:</strong> <span className="badge">Trialing</span></p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" type="button">Upgrade Plan</button>
          <button className="btn btn-outline" type="button">Cancel Plan</button>
          <button className="btn btn-outline" type="button">View Invoices</button>
        </div>
      </article>
      <article className="card panel-pad" style={{ marginTop: 12 }}>
        <h3>Payment History</h3>
        <table className="table"><thead><tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th></tr></thead><tbody><tr><td>2026-02-20</td><td>Basic Plan Renewal</td><td>{ngn(15000)}</td><td>Paid</td></tr></tbody></table>
      </article>
      <article className="card panel-pad" style={{ marginTop: 12 }}>
        <h3>Invoices</h3>
        <table className="table"><thead><tr><th>Invoice</th><th>Date</th><th>Amount</th><th>Action</th></tr></thead><tbody><tr><td>INV-2026-002</td><td>2026-02-20</td><td>{ngn(15000)}</td><td><button className="btn btn-outline" type="button">Download</button></td></tr></tbody></table>
      </article>
    </section>
  );
}
