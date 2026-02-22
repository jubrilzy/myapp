import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div style={{ padding: '0 16px' }}>
      <div className="auth-wrap">
        <p className="muted" style={{ marginTop: 0 }}>Launch your store in minutes</p>
        <h1 style={{ marginTop: 0 }}>Create account</h1>
        <div className="field">
          <label>Full Name</label>
          <input type="text" placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <button className="btn btn-primary" style={{ width: '100%' }}>Create account</button>
        <p className="muted" style={{ marginBottom: 0, marginTop: 14 }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--lime)' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}
