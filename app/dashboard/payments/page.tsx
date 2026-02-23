'use client';

import { useMemo, useState } from 'react';
import { transactions } from '@/lib/mock-data';
import { EmptyState, SkeletonList } from '@/components/dashboard/ui';

export default function PaymentsPage() {
  const [status, setStatus] = useState<'All' | 'Success'>('All');
  const [loading, setLoading] = useState(false);
  const rows = useMemo(() => transactions.filter((t) => status === 'All' || t.status === status), [status]);

  return <div>
    <div className="page-title">Payment Setup</div>
    <div className="page-sub">Configure gateways and payout settings</div>

    <div className="two-col" style={{ margin: '14px 0' }}>
      <div className="card"><div className="sec-title">Paystack</div><div className="page-sub">Connected</div></div>
      <div className="card"><div className="sec-title">Flutterwave</div><div className="page-sub">Connected</div></div>
    </div>

    <div className="card" style={{ marginBottom: 14 }}>
      <div className="form-row">
        <div className="form-group"><label className="form-label">Public key</label><input className="fi" placeholder="pk_live_..." /></div>
        <div className="form-group"><label className="form-label">Secret key</label><input className="fi" placeholder="sk_live_..." /></div>
      </div>
      <button className="btn btn-primary">Save settings</button>
    </div>

    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
      <button className={`btn btn-sm ${status === 'All' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => { setLoading(true); setStatus('All'); setTimeout(() => setLoading(false), 200); }}>All</button>
      <button className={`btn btn-sm ${status === 'Success' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => { setLoading(true); setStatus('Success'); setTimeout(() => setLoading(false), 200); }}>Successful</button>
      <button className="btn btn-ghost btn-sm">Download CSV</button>
    </div>

    {loading ? <SkeletonList /> : rows.length === 0 ? <EmptyState title="No transactions" subtitle="Transactions appear after successful payments." /> : <div className="tbl-wrap"><table><thead><tr><th>Date</th><th>Provider</th><th>Reference</th><th>Amount</th><th>Status</th></tr></thead><tbody>{rows.map((tx) => <tr key={tx.id}><td>{tx.date}</td><td>{tx.provider}</td><td>{tx.reference}</td><td>₦{tx.amount.toLocaleString()}</td><td><span className="badge badge-paid">{tx.status}</span></td></tr>)}</tbody></table></div>}
  </div>;
}
