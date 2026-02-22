import { ngn } from '@/components/ui/format';
import { products, store } from '@/lib/mock-data';

export default function MinimalTemplate() {
  return <div className="container"><header className="store-header"><h2>{store.name}</h2></header><section className="grid product-grid">{products.map(p=><article key={p.id} className="card panel-pad"><div>{p.image}</div><h4>{p.name}</h4><p>{ngn(p.price)}</p></article>)}</section><footer className="muted">{store.name} · {store.slug}</footer></div>;
}
