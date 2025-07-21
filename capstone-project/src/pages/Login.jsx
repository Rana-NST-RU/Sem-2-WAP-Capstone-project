import React, { useState } from 'react';

const Login = ({ onNavigate }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    // Check credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (user) {
      alert('Logged in!');
      setForm({ email: '', password: '' });
      onNavigate('home');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="about-content" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      {error && <div className="form-success" style={{ background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Your password"
            required
          />
        </div>
        <button className="form-button" type="submit">Login</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Don't have an account?{' '}
        <span style={{ color: '#667eea', cursor: 'pointer' }} onClick={() => onNavigate('signup')}>Sign up</span>
      </p>
    </div>
  );
};

export default Login; 