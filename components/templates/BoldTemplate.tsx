import { ngn } from '@/components/ui/format';
import { products, store } from '@/lib/mock-data';

export default function BoldTemplate() {
  return <div className="container"><header className="card panel-pad"><h1>{store.name}</h1><p className="muted">Bold Commerce</p></header><section className="grid product-grid">{products.map(p=><article key={p.id} className="card panel-pad"><h3>{p.image} {p.name}</h3><strong>{ngn(p.price)}</strong></article>)}</section><footer className="muted">Contact: support@{store.slug}.com</footer></div>;
}
