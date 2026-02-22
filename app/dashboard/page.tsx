'use client';

import { useMemo, useState } from 'react';

const stats = [
  { label: 'Total Orders', value: '7', sub: '+2 this week' },
  { label: 'Total Revenue', value: '₦84.5k', sub: 'This month' },
  { label: 'Out for Delivery', value: '2', sub: 'You are delivering today' },
  { label: 'Pending Payment', value: '1', sub: 'Awaiting confirmation' },
];

const templates = [
  { id: 'default', name: 'Bizshop Default', desc: 'Balanced layout for fashion, beauty, and general stores.' },
  { id: 'minimal', name: 'Minimal Grid', desc: 'Clean, product-first store layout with lightweight sections.' },
  { id: 'editorial', name: 'Editorial', desc: 'Story-led homepage with large banners and campaign sections.' },
];

export default function DashboardPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('default');

  const activeTemplate = useMemo(
    () => templates.find((template) => template.id === selectedTemplate) ?? templates[0],
    [selectedTemplate],
  );

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Good afternoon, Amaka 👋</h1>
      <p className="muted">Here is your store performance for Mini Fashion today.</p>

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
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Store Template</h3>
            <p className="muted" style={{ marginTop: 6 }}>
              Select the layout used for your storefront. Bizshop Default is the default template.
            </p>
          </div>
          <span className="badge">Default: Bizshop Default</span>
        </div>

        <div className="grid" style={{ marginTop: 16, gap: 12 }}>
          {templates.map((template) => {
            const active = template.id === selectedTemplate;
            return (
              <button
                key={template.id}
                type="button"
                onClick={() => setSelectedTemplate(template.id)}
                style={{
                  textAlign: 'left',
                  border: active ? '1px solid var(--lime)' : '1px solid var(--border)',
                  background: active ? 'var(--lime-bg)' : 'var(--card)',
                  borderRadius: 12,
                  padding: 14,
                  cursor: 'pointer',
                  color: 'var(--white)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <strong>{template.name}</strong>
                  {template.id === 'default' ? <span className="badge">Default</span> : null}
                </div>
                <p className="muted" style={{ marginTop: 6 }}>{template.desc}</p>
              </button>
            );
          })}
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <p className="muted" style={{ margin: 0 }}>Active template</p>
          <h4 style={{ marginTop: 8 }}>{activeTemplate.name}</h4>
          <p className="muted" style={{ marginTop: 6 }}>{activeTemplate.desc}</p>
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <button className="btn btn-primary" type="button">Save Template</button>
            <button className="btn btn-outline" type="button">Preview Store</button>
          </div>
        </div>
      </section>
    </section>
  );
}
