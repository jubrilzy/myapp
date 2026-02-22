'use client';
import { useState } from 'react';

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(0);
  return <div><h1 className="page-title">Support</h1><div className="two-col"><div className="card"><h3>Contact support</h3><input className="fi" placeholder="Subject" /><textarea rows={5} placeholder="Describe your issue" /><button className="btn btn-primary">Send message</button></div><div className="card"><h3>FAQ</h3>{['How do I connect payments?', 'How do I switch template?', 'How to export orders?'].map((q, i) => <div key={q}><button className="btn btn-ghost" onClick={() => setOpen(open === i ? null : i)}>{q}</button>{open === i && <p className="page-sub">Knowledge base article link and steps.</p>}</div>)}</div></div></div>;
}
