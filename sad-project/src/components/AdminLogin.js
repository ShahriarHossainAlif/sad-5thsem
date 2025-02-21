import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginBoth.css";


function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate(); 

  const fixedEmail = "a@gmail.com"; 
  const fixedPassword = "a1234"; 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (email === fixedEmail && password === fixedPassword) {
      setErrorMessage('');
      alert('Login successful!');
      localStorage.setItem('isAdmin', 'true');
      
      navigate('/admin-dashboard');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="form">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="Admin Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default AdminLogin;
