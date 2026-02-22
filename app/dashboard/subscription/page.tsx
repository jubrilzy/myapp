import { store, transactions } from '@/lib/mock-data';

export default function SubscriptionPage() {
  return <div><h1 className="page-title">Subscription</h1><div className="card"><h3>{store.plan}</h3><p>Renewal date: {store.renewalDate}</p><span className="badge paid">Active</span><div style={{ marginTop: 10, display: 'flex', gap: 8 }}><button className="btn btn-primary">Upgrade</button><button className="btn btn-ghost">Cancel plan</button></div></div><div className="card" style={{ marginTop: 10 }}>Invoices and payment history ({transactions.length})</div></div>;
}
