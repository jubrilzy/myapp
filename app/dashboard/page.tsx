const stats = [
  { label: 'Total Products', value: '24' },
  { label: 'Orders Today', value: '6' },
  { label: 'Monthly Revenue', value: '$1,920' },
  { label: 'Subscription', value: 'Trialing' },
];

export default function DashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Overview</h1>
      <p style={{ color: 'var(--muted)' }}>Static dashboard shell for MVP stage 1.</p>
      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        {stats.map((item) => (
          <article key={item.label} className="card" style={{ padding: 18 }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>{item.label}</p>
            <h3 style={{ marginBottom: 0 }}>{item.value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
