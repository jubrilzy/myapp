'use client';
import { deliveries } from '@/lib/mock-data';
import { useState } from 'react';
import { Modal } from '@/components/dashboard/ui';

export default function DeliveriesPage() {
  const [items, setItems] = useState(deliveries); const [open, setOpen] = useState(false);
  return <div><h1 className="page-title">Deliveries</h1><p className="page-sub">Track and update fulfilment</p>
    <div className="tbl-wrap desktop-only"><table><thead><tr><th>ID</th><th>Order</th><th>Partner</th><th>ETA</th><th>Status</th><th /></tr></thead><tbody>{items.map(d => <tr key={d.id}><td>{d.id}</td><td>{d.orderId}</td><td>{d.partner}</td><td>{d.eta}</td><td>{d.status}</td><td><button className="btn btn-ghost" onClick={() => setOpen(true)}>Reschedule</button> <button className="btn btn-primary" onClick={() => setItems(s => s.map(x => x.id === d.id ? { ...x, status: 'Delivered', eta: 'Delivered' } : x))}>Mark delivered</button></td></tr>)}</tbody></table></div>
    <div className="mobile-cards">{items.map(d => <div className="mobile-card" key={d.id}>{d.orderId}<div>{d.status}</div></div>)}</div>
    <Modal title="Update delivery" open={open} onClose={() => setOpen(false)}><button className="btn btn-primary" onClick={() => setOpen(false)}>Save</button></Modal>
  </div>;
}
