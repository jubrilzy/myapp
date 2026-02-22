'use client';
import Link from 'next/link';
import { products } from '@/lib/mock-data';
import { useState } from 'react';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const data = products.filter(p => filter === 'All' || p.category === filter || (filter === 'Out of Stock' && p.stock === 0));
  return <div><h1 className="page-title">Products</h1><p className="page-sub">Catalogue and inventory</p>
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>{['All', 'Dresses', 'Shoes', 'Bags', 'Accessories', 'Out of Stock'].map(f => <button className={`btn ${filter === f ? 'btn-primary' : 'btn-ghost'}`} key={f} onClick={() => setFilter(f)}>{f}</button>)}<Link href="/dashboard/products/new" className="btn btn-primary">Add Product</Link></div>
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>{data.map(p => <div className="card" key={p.id}><div style={{ fontSize: 32 }}>{p.image}</div><strong>{p.name}</strong><div className="page-sub">₦{p.price.toLocaleString()}</div><Link href={`/dashboard/products/${p.id}`} className="btn btn-ghost">Edit</Link></div>)}</div>
  </div>;
}
