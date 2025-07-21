import React, { useState } from 'react';

const Signup = ({ onNavigate }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === form.email)) {
      setError('Email is already registered.');
      return;
    }
    // Save new user
    users.push({ name: form.name, email: form.email, password: form.password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created! Please login.');
    setForm({ name: '', email: '', password: '' });
    onNavigate('login');
  };

  return (
    <div className="about-content" style={{ maxWidth: 400 }}>
      <h2>Sign Up</h2>
      {error && <div className="form-success" style={{ background: 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
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
        <button className="form-button" type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Already have an account?{' '}
        <span style={{ color: '#667eea', cursor: 'pointer' }} onClick={() => onNavigate('login')}>Login</span>
      </p>
    </div>
  );
};

export default Signup; 