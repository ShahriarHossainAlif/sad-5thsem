import React from 'react';
import "./LoginBoth.css"
function AdminLogin() {
  return (
    <div className="form">
      <h2>Admin Login</h2>
      <form>
        <input type="email" placeholder="Admin Email" required />
        <br/>
        <input type="password" placeholder="Password" required />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
