'use client';
import { Modal } from '@/components/dashboard/ui';
import { useState } from 'react';
export default function EditProduct() {
  const [open, setOpen] = useState(false);
  return <div><h1 className="page-title">Edit Product</h1><div className="card"><input className="fi" defaultValue="Ankara Maxi Dress" /><input className="fi" defaultValue="₦12,500" /><div style={{ display: 'flex', gap: 8 }}><button className="btn btn-ghost">Duplicate</button><button className="btn btn-primary">Update</button><button className="btn btn-ghost" onClick={() => setOpen(true)}>Delete</button></div></div><Modal title="Delete product" open={open} onClose={() => setOpen(false)}><button className="btn btn-primary" onClick={() => setOpen(false)}>Confirm</button></Modal></div>;
}
