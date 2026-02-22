import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ padding: '0 16px' }}>
      <div className="auth-wrap">
        <p className="muted" style={{ marginTop: 0 }}>Welcome back to Bizshop</p>
        <h1 style={{ marginTop: 0 }}>Log in</h1>
        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <button className="btn btn-primary" style={{ width: '100%' }}>Sign in</button>
        <p className="muted" style={{ marginBottom: 0, marginTop: 14 }}>
          New here? <Link href="/register" style={{ color: 'var(--lime)' }}>Create account</Link>
        </p>
      </div>
    </div>
  );
}
