export type TemplateName = 'minimal' | 'bold';

export const store = {
  name: 'Nova Style',
  slug: 'nova-style',
  owner: 'Amaka Okonkwo',
  plan: 'Basic Plan',
  status: 'Active',
  subscriptionStatus: 'Trialing',
  template_name: 'minimal' as TemplateName,
};

export const kpis = {
  totalRevenue: 845000,
  ordersToday: 4,
  ordersMonth: 37,
  totalProducts: 28,
  lowStock: 5,
};

export const products = [
  { id: 'P-101', image: '👗', name: 'Ankara Maxi Dress', sku: 'ANK-MAXI-01', price: 12500, stock: 15, status: 'Active' },
  { id: 'P-102', image: '👟', name: 'Classic White Sneakers', sku: 'SNK-WHT-40', price: 8000, stock: 0, status: 'Out of stock' },
  { id: 'P-103', image: '👜', name: 'Mini Leather Clutch', sku: 'BAG-CLT-03', price: 6500, stock: 3, status: 'Draft' },
];

export const orders = [
  { id: 'BSH-20240228', customer: 'Chidi Eze', total: 22000, payment: 'Paid', fulfillment: 'Out for Delivery', date: '2026-02-24' },
  { id: 'BSH-20240215', customer: 'Ngozi Adaeze', total: 12500, payment: 'Paid', fulfillment: 'Delivered', date: '2026-02-15' },
  { id: 'BSH-20240118', customer: 'Fatima Bello', total: 8500, payment: 'Pending', fulfillment: 'Processing', date: '2026-01-18' },
];

export const customers = [
  { id: 'C-1', name: 'Chidi Eze', email: 'chidi@email.com', phone: '+2348012345678', orders: 3, spent: 64500, lastOrder: '2026-02-24' },
  { id: 'C-2', name: 'Ngozi Adaeze', email: 'ngozi@email.com', phone: '+2348034567890', orders: 2, spent: 20500, lastOrder: '2026-02-15' },
];

export const transactions = [
  { date: '2026-02-24', provider: 'Paystack', reference: 'PSK-7f3a9c2e1b', amount: 22000, status: 'Success' },
  { date: '2026-02-15', provider: 'Flutterwave', reference: 'FLW-4aa18de22', amount: 12500, status: 'Success' },
];
