import Link from 'next/link';
import { EmptyState } from '@/components/ui/states';

const customers = [
  { id: 'C-1001', name: 'Ada James', email: 'ada@mail.com', orders: 4, spent: '$480.00' },
  { id: 'C-1002', name: 'Ibrahim Musa', email: 'ibrahim@mail.com', orders: 2, spent: '$145.00' },
  { id: 'C-1003', name: 'Grace N.', email: 'grace@mail.com', orders: 1, spent: '$45.00' },
];

export default function DashboardCustomersPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Customers</h1>
      <p className="muted">Track customer value and order history snapshots.</p>

      <div style={{ marginTop: 12 }}><input className="filter-input" placeholder="Search customers" /></div>
      {customers.length === 0 ? (
        <EmptyState title="No customers yet" description="Data will appear here once activity starts." />
      ) : (
      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.orders}</td>
                  <td>{customer.spent}</td>
                  <td><Link href={`/dashboard/customers/${customer.id}`}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      )}
    </section>
  );
}
