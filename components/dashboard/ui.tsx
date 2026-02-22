'use client';

import { useState } from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export function StatCard({ icon, value, label, sub }: { icon: string; value: string; label: string; sub?: string }) {
  return <div className="stat-card"><div className="stat-ico">{icon}</div><div className="stat-val">{value}</div><div className="stat-lbl">{label}</div>{sub ? <div className="stat-sub">{sub}</div> : null}</div>;
}

export function EmptyState({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="empty-state"><div className="empty-title">{title}</div><div className="empty-sub">{subtitle}</div></div>;
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return <div style={{ display: 'grid', gap: 10 }}>{Array.from({ length: count }).map((_, idx) => <div key={idx} className="skeleton" />)}</div>;
}

export function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: React.ReactNode; onClose: () => void }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(e) => e.stopPropagation()}><h3 className="sec-title" style={{ marginBottom: 8 }}>{title}</h3>{children}</div></div>;
}

export function ToggleSwitch({ checkedDefault = false }: { checkedDefault?: boolean }) {
  const [on, setOn] = useState(checkedDefault);
  return <label className="tog"><input type="checkbox" checked={on} onChange={() => setOn((v) => !v)} /><span className="tog-sl" /></label>;
}

export function Timeline({ items }: { items: Array<{ title: string; time: string; state: 'done' | 'active' | 'pend' }> }) {
  return <div className="timeline">{items.map((item, idx) => <div key={item.title + idx} className="tl-item"><div className={`tl-dot ${item.state}`}>{item.state === 'done' ? '✓' : item.state === 'active' ? '🚚' : '•'}</div><div><div>{item.title}</div><div className="page-sub">{item.time}</div></div></div>)}</div>;
}
