import { kpis } from '@/lib/mock-data';
import { StatCard } from '@/components/dashboard/ui';

export default function AnalyticsPage() {
  return <div><h1 className="page-title">Sales Analytics</h1><div className="grid stats"><StatCard icon="💰" value={`₦${(kpis.totalRevenue/1000).toFixed(0)}k`} label="Revenue"/><StatCard icon="📦" value={`${kpis.orders}`} label="Orders"/><StatCard icon="📊" value={`₦${(kpis.avgOrder/1000).toFixed(1)}k`} label="Avg order"/><StatCard icon="👥" value={`${kpis.repeatCustomers}`} label="Repeat customers"/></div><div className="two-col"><div className="card">Monthly Revenue bars (UI)</div><div className="card">Spend by Category breakdown</div></div><div className="card" style={{ marginTop: 12 }}>Order history table</div></div>;
}
