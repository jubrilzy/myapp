import Link from 'next/link';

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
    </section>
  );
}
