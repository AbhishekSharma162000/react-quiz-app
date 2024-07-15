// src/components/Auth/RegisterForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy registration logic for demonstration purposes
    if (captcha === '1234') { // Simulated captcha check
      localStorage.setItem('currentUser', JSON.stringify({ username, email }));
      navigate('/dashboard');
    } else {
      alert('Invalid captcha');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="captcha">Captcha</label>
        <input
          type="text"
          id="captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          required
        />
        <p>Enter "1234" as the captcha</p> {/* Simulated captcha for demo purposes */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
