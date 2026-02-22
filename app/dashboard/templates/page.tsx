import Link from 'next/link';

export default function TemplatesPage() {
  return <section><h1 style={{ marginTop: 0 }}>Design Templates</h1><div className="template-grid"><article className="template-card active"><div className="preview-box" /><h3>Minimal Classic</h3><span className="badge">Active</span><div style={{ marginTop: 8, display: 'flex', gap: 8 }}><button className="btn btn-outline" type="button">Preview</button><button className="btn btn-primary" type="button">Select</button></div></article><article className="template-card"><div className="preview-box" /><h3>Bold Commerce</h3><div style={{ marginTop: 8, display: 'flex', gap: 8 }}><button className="btn btn-outline" type="button">Preview</button><button className="btn btn-primary" type="button">Select</button></div></article></div><Link href="/dashboard/settings/design" className="btn btn-outline" style={{ marginTop: 12 }}>Customize Design</Link></section>;
}
