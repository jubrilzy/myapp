import Link from 'next/link';

const stats = [
  { label: 'Total Orders', value: '7', sub: '+2 this week' },
  { label: 'Total Revenue', value: '₦84.5k', sub: 'This month' },
  { label: 'Out for Delivery', value: '2', sub: 'You are delivering today' },
  { label: 'Pending Payment', value: '1', sub: 'Awaiting confirmation' },
];

const templates = [
  { id: 'default', name: 'Bizshop Default', desc: 'Balanced layout for fashion, beauty and general stores.' },
  { id: 'minimal', name: 'Minimal Grid', desc: 'Clean, product-first store layout with lightweight sections.' },
  { id: 'editorial', name: 'Editorial', desc: 'Story-led homepage with large banners and campaign sections.' },
];

export default function DashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Dashboard Overview</h1>
      <p className="muted">Good afternoon, Amaka 👋. Here is your store performance for Nova Style today.</p>

      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        {stats.map((item) => (
          <article key={item.label} className="card panel-pad">
            <p className="muted" style={{ margin: 0 }}>{item.label}</p>
            <h3 style={{ marginBottom: 0 }}>{item.value}</h3>
            <p className="muted" style={{ marginTop: 8 }}>{item.sub}</p>
          </article>
        ))}
      </div>

      <section className="card panel-pad" style={{ marginTop: 20 }}>
        <div className="row-between">
          <div>
            <h3 style={{ marginTop: 0 }}>Store Template</h3>
            <p className="muted" style={{ marginTop: 6 }}>
              Select a template for your storefront. Bizshop Default is the default template.
            </p>
          </div>
          <span className="badge">Default: Bizshop Default</span>
        </div>

        <div className="template-grid" style={{ marginTop: 12 }}>
          {templates.map((template) => (
            <article key={template.id} className={`template-card ${template.id === 'default' ? 'active' : ''}`}>
              <div className="row-between">
                <strong>{template.name}</strong>
                {template.id === 'default' ? <span className="badge">Default</span> : null}
              </div>
              <p className="muted" style={{ marginTop: 8 }}>{template.desc}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link href="/dashboard/settings" className="btn btn-primary">Save Template</Link>
          <Link href="/nova-style" className="btn btn-outline">Preview Store</Link>
        </div>
      </section>
    </section>
  );
}
