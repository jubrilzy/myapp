'use client';
import { useMemo, useState } from 'react';

export default function SecurityPage() {
  const [pwd, setPwd] = useState('');
  const score = useMemo(() => (pwd.length >= 8 ? 1 : 0) + (/[A-Z]/.test(pwd) ? 1 : 0) + (/[0-9]/.test(pwd) ? 1 : 0) + (/[^A-Za-z0-9]/.test(pwd) ? 1 : 0), [pwd]);
  return <div><h1 className="page-title">Security</h1><div className="two-col"><div className="card"><h3>Change password</h3><input className="fi" type="password" placeholder="Current" /><input className="fi" type="password" placeholder="New" value={pwd} onChange={e => setPwd(e.target.value)} /><div style={{ display: 'flex', gap: 4, margin: '8px 0' }}>{Array.from({ length: 4 }).map((_, i) => <div key={i} style={{ height: 4, flex: 1, background: i < score ? 'var(--lime)' : 'var(--border)' }} />)}</div><input className="fi" type="password" placeholder="Confirm" /><button className="btn btn-primary">Update</button></div><div className="card"><h3>Sessions</h3><p>Chrome · MacOS (active)</p><p>Safari · iPhone</p><h4>2FA</h4><span className="badge pending">Coming soon</span><div className="card" style={{ marginTop: 10 }}>Danger zone: <button className="btn btn-ghost">Request account deletion</button></div></div></div></div>;
}
