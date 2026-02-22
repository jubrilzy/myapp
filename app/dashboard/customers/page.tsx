import Link from 'next/link';
import { customers } from '@/lib/mock-data';

export default function CustomersPage() {
  return <div><h1 className="page-title">Customers</h1><p className="page-sub">Directory and spend insights</p><button className="btn btn-ghost" style={{ marginBottom: 10 }}>Export CSV</button>
    <div className="tbl-wrap desktop-only"><table><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Orders</th><th>Spent</th></tr></thead><tbody>{customers.map(c => <tr key={c.id}><td><Link href={`/dashboard/customers/${c.id}`}>{c.name}</Link></td><td>{c.email}</td><td>{c.phone}</td><td>{c.orders}</td><td>₦{c.spent.toLocaleString()}</td></tr>)}</tbody></table></div>
    <div className="mobile-cards">{customers.map(c => <div className="mobile-card" key={c.id}><Link href={`/dashboard/customers/${c.id}`}>{c.name}</Link><div>{c.email}</div></div>)}</div>
  </div>;
}
