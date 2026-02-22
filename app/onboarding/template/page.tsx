import Link from 'next/link';

export default function OnboardingTemplatePage() {
  return (
    <section className="container" style={{ paddingTop: 40 }}>
      <h1>Choose a Store Template</h1>
      <div className="template-grid" style={{ marginTop: 16 }}>
        <article className="template-card active"><div className="preview-box" /><h3>Minimal Classic</h3><p className="muted">Clean and elegant for fashion and beauty brands.</p><div style={{ display: 'flex', gap: 8 }}><button className="btn btn-outline" type="button">Preview</button><button className="btn btn-primary" type="button">Select</button></div></article>
        <article className="template-card"><div className="preview-box" /><h3>Bold Commerce</h3><p className="muted">High-contrast merchandising for electronics and wholesale stores.</p><div style={{ display: 'flex', gap: 8 }}><button className="btn btn-outline" type="button">Preview</button><button className="btn btn-primary" type="button">Select</button></div></article>
      </div>
      <Link href="/dashboard" className="btn btn-primary" style={{ marginTop: 16 }}>Continue to Dashboard</Link>
    </section>
  );
}
