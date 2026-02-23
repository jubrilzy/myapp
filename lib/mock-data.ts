export const store = { name: 'Mini Fashion', slug: 'mini-fashion', owner: 'Amaka Okonkwo', plan: 'Basic Plan', status: 'Active', renewalDate: '2026-03-21', template_name: 'minimal' as 'minimal' | 'bold' };
export const kpis = { totalRevenue: 842000, orders: 47, avgOrder: 17900, repeatCustomers: 5, products: 24, deliveries: 18 };
export const products = [
  { id: 'p1', image: '👗', name: 'Ankara Maxi Dress', category: 'Dresses', price: 12500, stock: 15, sku: 'ANK-01', status: 'In Stock' },
  { id: 'p2', image: '👟', name: 'Classic White Sneakers', category: 'Shoes', price: 8000, stock: 0, sku: 'SNK-22', status: 'Out of Stock' },
  { id: 'p3', image: '👜', name: 'Mini Leather Clutch', category: 'Bags', price: 6500, stock: 3, sku: 'BAG-09', status: 'Low Stock' },
];
export const orders = [
  { id: 'BSH-20240228', customer: 'Amaka Okonkwo', total: 22000, payment: 'Paid', status: 'Shipped', date: '24 Feb 2026' },
  { id: 'BSH-20240215', customer: 'Ngozi Adaeze', total: 12500, payment: 'Paid', status: 'Delivered', date: '15 Feb 2026' },
  { id: 'BSH-20240118', customer: 'Fatima Bello', total: 8500, payment: 'Pending', status: 'Processing', date: '18 Jan 2026' },
];
export const customers = [
  { id: 'c1', name: 'Amaka Okonkwo', email: 'amaka@gmail.com', phone: '+2348012345678', orders: 3, spent: 64500 },
  { id: 'c2', name: 'Ngozi Adaeze', email: 'ngozi@email.com', phone: '+2348034567890', orders: 2, spent: 20500 },
];
export const deliveries = [
  { id: 'D-101', orderId: 'BSH-20240228', partner: 'GIG', eta: 'Today', status: 'In Transit' },
  { id: 'D-099', orderId: 'BSH-20240215', partner: 'Kwik', eta: 'Delivered', status: 'Delivered' },
];
export const notifications = [
  { id: 'n1', title: 'New order received', body: 'Order BSH-20240228 placed', time: '2m ago', read: false },
  { id: 'n2', title: 'Low stock alert', body: 'Mini Leather Clutch is low', time: '1h ago', read: false },
];
export const transactions = [
  { id: 't1', date: '24 Feb 2026', provider: 'Paystack', reference: 'PSK-7f3a9c2e1b', amount: 22000, status: 'Success' },
  { id: 't2', date: '15 Feb 2026', provider: 'Flutterwave', reference: 'FLW-4aa18de22', amount: 12500, status: 'Success' },
];
export const templates = [
  { id: 'minimal', name: 'Minimal', active: true },
  { id: 'bold', name: 'Bold', active: false },
];
