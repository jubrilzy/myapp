'use client';

import { useState } from 'react';
import { deliveries } from '@/lib/mock-data';
import { EmptyState, Modal, SkeletonList } from '@/components/dashboard/ui';

export default function DeliveriesPage() {
  const [rows, setRows] = useState(deliveries);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function markDelivered(id: string) {
    setRows((prev) => prev.map((item) => item.id === id ? { ...item, status: 'Delivered', eta: 'Delivered' } : item));
  }

  return <div>
    <div className="page-title">Delivery Zones</div>
    <div className="page-sub">Track and update fulfilment</div>

    {loading ? <SkeletonList /> : rows.length === 0 ? <EmptyState title="No deliveries" subtitle="New delivery rows will appear here." /> : <div className="tbl-wrap"><table><thead><tr><th>ID</th><th>Order</th><th>Partner</th><th>ETA</th><th>Status</th><th /></tr></thead><tbody>{rows.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.orderId}</td><td>{item.partner}</td><td>{item.eta}</td><td>{item.status}</td><td><button className="btn btn-ghost btn-sm" onClick={() => setOpen(true)}>Reschedule</button> <button className="btn btn-primary btn-sm" onClick={() => markDelivered(item.id)}>Mark delivered</button></td></tr>)}</tbody></table></div>}

    <Modal open={open} title="Reschedule delivery" onClose={() => setOpen(false)}>
      <div className="form-group"><label className="form-label">New date</label><input className="fi" type="date" /></div>
      <button className="btn btn-primary" onClick={() => setOpen(false)}>Update</button>
    </Modal>
  </div>;
}
