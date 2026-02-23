'use client';
export default function Invoice() {
  return <div><h1 className="page-title">Receipt</h1><div className="card" style={{ maxWidth: 640 }}><p>Order #BSH-20240228</p><p>Total Paid: <strong>₦22,000</strong></p><button className="btn btn-primary" onClick={() => window.print()}>Print / PDF</button></div></div>;
}
