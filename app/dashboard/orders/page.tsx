import Link from 'next/link';
import { EmptyState } from '@/components/ui/states';

const orders = [
  { id: 'ORD-3021', customer: 'Ada James', email: 'ada@mail.com', amount: '$120.00', payment: 'Paid', fulfillment: 'Unfulfilled', date: '2026-02-20' },
  { id: 'ORD-3020', customer: 'Ibrahim Musa', email: 'ibrahim@mail.com', amount: '$65.00', payment: 'Paid', fulfillment: 'Fulfilled', date: '2026-02-19' },
  { id: 'ORD-3019', customer: 'Grace N.', email: 'grace@mail.com', amount: '$45.00', payment: 'Pending', fulfillment: 'Unfulfilled', date: '2026-02-19' },
];

export default function DashboardOrdersPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Orders</h1>
      <p className="muted">Monitor payment and fulfillment status.</p>

      <div className="row-between" style={{ marginTop: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><select className="btn btn-outline"><option>Payment: All</option><option>Paid</option><option>Pending</option></select><select className="btn btn-outline"><option>Fulfillment: All</option><option>Processing</option><option>Delivered</option></select><input className="filter-input" placeholder="Date range" /></div>
      </div>
      {orders.length === 0 ? (
        <EmptyState title="No orders yet" description="Data will appear here once activity starts." />
      ) : (
      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Fulfillment</th>
                <th>Date</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.email}</td>
                  <td>{order.amount}</td>
                  <td>{order.payment}</td>
                  <td>{order.fulfillment}</td>
                  <td>{order.date}</td>
                  <td><Link href={`/dashboard/orders/${order.id}`}>View</Link></td>
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
