'use client';
import { templates } from '@/lib/mock-data';
import { Modal } from '@/components/dashboard/ui';
import { useState } from 'react';

export default function TemplatesPage() {
  const [open, setOpen] = useState(false);
  return <div><h1 className="page-title">Templates</h1><div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>{templates.map(t => <div className="card" key={t.id}><h3>{t.name} {t.active && <span className="badge paid">Active</span>}</h3><div style={{ display: 'flex', gap: 8 }}><button className="btn btn-ghost" onClick={() => setOpen(true)}>Preview</button><button className="btn btn-primary">Select</button></div></div>)}</div><Modal title="Template preview" open={open} onClose={() => setOpen(false)}><div className="card">Preview mock</div></Modal></div>;
}
