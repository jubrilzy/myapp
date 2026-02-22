import { transactions } from '@/lib/mock-data';

export default function PaymentsPage() {
  return <div><h1 className="page-title">Payments</h1><div className="grid" style={{ gridTemplateColumns: 'repeat(3,minmax(0,1fr))', marginBottom: 12 }}><div className="card">Paystack connected</div><div className="card">Flutterwave connected</div><div className="card">USD payout (upgrade)</div></div>
    <div className="card"><div className="form-row"><input className="fi" placeholder="Public key" /><input className="fi" placeholder="Secret key" /></div><button className="btn btn-primary">Save settings</button></div>
    <div className="card" style={{ marginTop: 12 }}><button className="btn btn-ghost">Download CSV</button><div className="tbl-wrap desktop-only"><table><thead><tr><th>Date</th><th>Provider</th><th>Reference</th><th>Amount</th><th>Status</th></tr></thead><tbody>{transactions.map(t => <tr key={t.id}><td>{t.date}</td><td>{t.provider}</td><td>{t.reference}</td><td>₦{t.amount.toLocaleString()}</td><td>{t.status}</td></tr>)}</tbody></table></div><div className="mobile-cards">{transactions.map(t => <div className="mobile-card" key={t.id}>{t.reference} · ₦{t.amount.toLocaleString()}</div>)}</div></div></div>;
}
