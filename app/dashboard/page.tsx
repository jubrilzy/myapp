export default function DashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Overview</h1>
      <p style={{ color: 'var(--muted)' }}>Static dashboard shell for MVP stage 1.</p>
      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        {['Total Products', 'Orders Today', 'Monthly Revenue', 'Subscription'].map((k, i) => (
          <article key={k} className="card" style={{ padding: 18 }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>{k}</p>
            <h3 style={{ marginBottom: 0 }}>{['24', '6', '$1,920', i === 3 ? 'Trialing' : ''] [i]}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
