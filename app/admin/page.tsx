const platformStats = [
  { label: 'Total Users', value: '1,284' },
  { label: 'Total Stores', value: '1,102' },
  { label: 'Active Subscriptions', value: '964' },
  { label: 'Monthly Revenue', value: '$42,840.00' },
  { label: 'Failed Payments', value: '17' },
];

export default function AdminDashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Platform Dashboard</h1>
      <p className="muted">High-level operations for the super admin dashboard.</p>

      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        {platformStats.map((item) => (
          <article key={item.label} className="card panel-pad">
            <p className="muted" style={{ margin: 0 }}>{item.label}</p>
            <h3 style={{ marginBottom: 0 }}>{item.value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
