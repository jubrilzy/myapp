import { ErrorPlaceholder, LoadingSkeleton } from '@/components/ui/states';

export default function AnalyticsPage() {
  return <section><h1 style={{ marginTop: 0 }}>Analytics</h1><div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 12 }}><article className="card panel-pad"><h3>Revenue Chart</h3><div className="chart-placeholder" /></article><article className="card panel-pad"><h3>Conversion Rate</h3><p>3.2%</p></article></div><article className="card panel-pad" style={{ marginTop: 12 }}><h3>Top Selling Products</h3><ul><li>Ankara Maxi Dress</li><li>Classic White Sneakers</li></ul></article><div style={{ marginTop: 12 }}><LoadingSkeleton rows={3} /></div><div style={{ marginTop: 12 }}><ErrorPlaceholder message="Chart service unavailable in Stage 1 mock mode." /></div></section>;
}
