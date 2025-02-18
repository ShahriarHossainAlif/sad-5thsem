import React, { useState } from 'react'
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function CustomerLogin () {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async  (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/user";
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch(error) {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 2000,
    })
  }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Customer Login</h2>
        <input type="email" placeholder="Username" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button> <br/>
        <Link to="/sign-up">Dont have an account</Link>
      </form>
    </div>
  )
}

export default CustomerLogin