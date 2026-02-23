'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { EmptyState, SkeletonList } from '@/components/dashboard/ui';
import { orders } from '@/lib/mock-data';

export default function OrdersPage() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(
    () => orders.filter((order) => (filter === 'All' || order.status === filter) && `${order.id}${order.customer}`.toLowerCase().includes(query.toLowerCase())),
    [filter, query],
  );

  function applyFilter(next: string) {
    setLoading(true);
    setFilter(next);
    setTimeout(() => setLoading(false), 200);
  }

  return <div>
    <div className="page-title">Orders</div>
    <div className="page-sub">Manage and fulfil customer orders</div>

    <div style={{ display: 'flex', gap: 8, margin: '14px 0', flexWrap: 'wrap' }}>
      {['All', 'Shipped', 'Delivered', 'Processing'].map((item) => <button key={item} className={`btn btn-sm ${filter === item ? 'btn-primary' : 'btn-ghost'}`} onClick={() => applyFilter(item)}>{item}</button>)}
      <input className="fi" placeholder="Search orders" value={query} onChange={(e) => setQuery(e.target.value)} style={{ maxWidth: 220 }} />
    </div>

    {loading ? <SkeletonList /> : filtered.length === 0 ? <EmptyState title="No orders found" subtitle="Try a different filter or search term." /> : <>
      <div className="tbl-wrap">
        <table>
          <thead><tr><th>Order</th><th>Customer</th><th>Date</th><th>Total</th><th>Payment</th><th>Delivery</th><th /></tr></thead>
          <tbody>{filtered.map((order) => <tr key={order.id}><td>{order.id}</td><td>{order.customer}</td><td>{order.date}</td><td>₦{order.total.toLocaleString()}</td><td><span className={`badge ${order.payment === 'Paid' ? 'badge-paid' : 'badge-pending'}`}>{order.payment}</span></td><td><span className="badge badge-shipped">{order.status}</span></td><td><Link className="btn btn-ghost btn-sm" href={`/dashboard/orders/${order.id}`}>View</Link></td></tr>)}</tbody>
        </table>
      </div>
    </>}
  </div>;
}
