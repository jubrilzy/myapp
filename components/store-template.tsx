'use client';

import { useState } from 'react';

type Product = { id: number; name: string; price: string };

const sampleProducts: Product[] = [
  { id: 1, name: 'Classic Tee', price: '$24.00' },
  { id: 2, name: 'Street Hoodie', price: '$48.00' },
  { id: 3, name: 'Canvas Sneakers', price: '$59.00' },
  { id: 4, name: 'Baseball Cap', price: '$18.00' },
];

export default function StoreTemplate({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <header className="store-header">
        <div className="logo">{slug.toUpperCase()} STORE</div>
        <button className="btn btn-outline cart-btn" onClick={() => setOpen(true)}>Cart (2)</button>
      </header>

      <section className="grid product-grid">
        {sampleProducts.map((p) => (
          <article key={p.id} className="card" style={{ padding: 14 }}>
            <div style={{ height: 140, background: '#1f2937', borderRadius: 8, marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 8px' }}>{p.name}</h3>
            <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>{p.price}</p>
            <button className="btn btn-primary">Add to cart</button>
          </article>
        ))}
      </section>

      <aside className={`drawer ${open ? 'open' : ''}`}>
        <h2 style={{ marginTop: 0 }}>Your Cart</h2>
        <p style={{ color: 'var(--muted)' }}>2 items</p>
        <ul>
          <li>Classic Tee — $24.00</li>
          <li>Baseball Cap — $18.00</li>
        </ul>
        <p><strong>Total: $42.00</strong></p>
        <button className="btn btn-primary" style={{ width: '100%', marginBottom: 8 }}>Checkout</button>
        <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => setOpen(false)}>Close</button>
      </aside>
    </div>
  );
}
