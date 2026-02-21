export default function RegisterPage() {
  return (
    <div className="auth-wrap card">
      <h1>Register</h1>
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
    </div>
  );
}
