'use client';
import { useState } from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => <div className="card">{children}</div>;
export const StatCard = ({ icon, value, label }: { icon: string; value: string; label: string }) => <div className="card"><div>{icon}</div><h3>{value}</h3><div className="page-sub" style={{ margin: 0 }}>{label}</div></div>;
export const EmptyState = ({ title }: { title: string }) => <div className="empty">{title}</div>;
export const SkeletonList = () => <div className="grid">{Array.from({ length: 3 }).map((_, i) => <div className="skeleton" key={i} />)}</div>;

export function Modal({ title, open, onClose, children }: { title: string; open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(e) => e.stopPropagation()}><h3>{title}</h3><div className="page-sub">UI-only action</div>{children}</div></div>;
}

export function ToggleSwitch({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return <button className="btn btn-ghost" onClick={() => setOn(!on)}>{on ? 'On' : 'Off'}</button>;
}
