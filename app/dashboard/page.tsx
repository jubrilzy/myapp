const stats = [
  { label: 'Total Orders', value: '128' },
  { label: 'Total Revenue', value: '$14,280.00' },
  { label: 'Active Products', value: '36' },
  { label: 'Subscription Status', value: 'Active' },
  { label: 'Store Status', value: 'Active' },
];

const recentOrders = [
  { id: '#ORD-3021', customer: 'Ada James', amount: '$120.00', status: 'Paid' },
  { id: '#ORD-3020', customer: 'Ibrahim Musa', amount: '$65.00', status: 'Paid' },
  { id: '#ORD-3019', customer: 'Grace N.', amount: '$45.00', status: 'Pending' },
  { id: '#ORD-3018', customer: 'Tunde A.', amount: '$310.00', status: 'Paid' },
  { id: '#ORD-3017', customer: 'Rita Cole', amount: '$90.00', status: 'Failed' },
];

export default function DashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Dashboard Overview</h1>
      <p className="muted">Operational summary for your store at a glance.</p>

      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        {stats.map((item) => (
          <article key={item.label} className="card panel-pad">
            <p className="muted" style={{ margin: 0 }}>{item.label}</p>
            <h3 style={{ marginBottom: 0 }}>{item.value}</h3>
          </article>
        ))}
      </div>

      <section className="card panel-pad" style={{ marginTop: 20 }}>
        <h3 style={{ marginTop: 0 }}>Recent Orders</h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
