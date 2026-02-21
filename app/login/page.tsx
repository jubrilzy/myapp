export default function LoginPage() {
  return (
    <div className="auth-wrap card">
      <h1>Login</h1>
      <div className="field">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" placeholder="********" />
      </div>
      <button className="btn btn-primary" style={{ width: '100%' }}>Sign in</button>
    </div>
  );
}
