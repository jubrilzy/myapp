'use client';
import { EmptyState, SkeletonList } from '@/components/dashboard/ui';
import { orders } from '@/lib/mock-data';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function OrdersPage() {
  const [q, setQ] = useState(''); const [filter, setFilter] = useState('All'); const [loading, setLoading] = useState(false);
  const data = useMemo(() => orders.filter(o => (filter === 'All' || o.status === filter) && `${o.id}${o.customer}`.toLowerCase().includes(q.toLowerCase())), [q, filter]);
  return <div><h1 className="page-title">Orders</h1><p className="page-sub">Manage all customer orders</p>
    <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
      {['All', 'Shipped', 'Delivered', 'Processing'].map(f => <button key={f} className={`btn ${filter === f ? 'btn-primary' : 'btn-ghost'}`} onClick={() => { setLoading(true); setFilter(f); setTimeout(() => setLoading(false), 250); }}>{f}</button>)}
      <input className="fi" placeholder="Search" value={q} onChange={e => setQ(e.target.value)} style={{ maxWidth: 220 }} />
    </div>
    {loading ? <SkeletonList /> : data.length === 0 ? <EmptyState title="No orders found" /> : <>
      <div className="tbl-wrap desktop-only"><table><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Payment</th><th>Status</th><th /></tr></thead><tbody>{data.map(o => <tr key={o.id}><td>{o.id}</td><td>{o.customer}</td><td>₦{o.total.toLocaleString()}</td><td>{o.payment}</td><td><span className="badge shipped">{o.status}</span></td><td><Link href={`/dashboard/orders/${o.id}`} className="btn btn-ghost">View</Link></td></tr>)}</tbody></table></div>
      <div className="mobile-cards">{data.map(o => <div className="mobile-card" key={o.id}><strong>{o.id}</strong><div>{o.customer}</div><div>₦{o.total.toLocaleString()}</div><Link href={`/dashboard/orders/${o.id}`} className="btn btn-ghost">Open</Link></div>)}</div>
    </>}
  </div>;
}
