'use client';

import Link from 'next/link';
import { useState } from 'react';
import { customers } from '@/lib/mock-data';
import { EmptyState, SkeletonList } from '@/components/dashboard/ui';

export default function CustomersPage() {
  const [loading, setLoading] = useState(false);
  const rows = customers;

  return <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <div>
        <div className="page-title">Customers</div>
        <div className="page-sub">Customers who have placed orders at your store</div>
      </div>
      <button className="btn btn-primary btn-sm" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 250); }}>Export CSV</button>
    </div>

    {loading ? <SkeletonList /> : rows.length === 0 ? <EmptyState title="No customers yet" subtitle="Customers will appear once orders are placed." /> : <div className="tbl-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Orders</th><th>Total spent</th></tr></thead><tbody>{rows.map((customer) => <tr key={customer.id}><td><Link href={`/dashboard/customers/${customer.id}`}>{customer.name}</Link></td><td>{customer.email}</td><td>{customer.phone}</td><td>{customer.orders}</td><td>₦{customer.spent.toLocaleString()}</td></tr>)}</tbody></table></div>}
  </div>;
}
