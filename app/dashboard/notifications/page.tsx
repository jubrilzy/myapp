'use client';
import { notifications as initial } from '@/lib/mock-data';
import { useMemo, useState } from 'react';

export default function NotificationsPage() {
  const [items, setItems] = useState(initial);
  const unread = useMemo(() => items.filter(i => !i.read).length, [items]);
  return <div><h1 className="page-title">Notifications</h1><p className="page-sub">Unread: {unread}</p><button className="btn btn-primary" onClick={() => setItems(s => s.map(i => ({ ...i, read: true })))}>Mark all read</button>
    <div className="card" style={{ marginTop: 12 }}>{items.map(i => <div key={i.id} style={{ opacity: i.read ? .55 : 1, borderBottom: '1px solid var(--border)', padding: '10px 0' }}><strong>{i.title}</strong><div className="page-sub" style={{ margin: 0 }}>{i.body} · {i.time}</div></div>)}</div></div>;
}
