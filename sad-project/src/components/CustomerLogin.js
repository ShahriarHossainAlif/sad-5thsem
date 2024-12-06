import React, { useState } from 'react';
import "./LoginBoth.css"
import { Link } from 'react-router-dom';
import validation from './LoginValidation';
function CustomerLogin() {
    const [values, setvalues] = useState ({
        email: "",
        password:""
    })
    const [errors, setErrors] = useState ({})
    const handleInput = (event) => {
        setvalues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
  return (
    <div className="form">
      <h2>Customer Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder="Customer Email" name='email'
        onChange={handleInput} required />
        {errors.email && <span className='text-danger'>{errors.email}</span>}
        <br/>
        <input type="password" placeholder="Password" name="password"
        onChange={handleInput}  required />
         {errors.password && <span className='text-danger'>{errors.password}</span>}
        <br/>
        <button type="submit">Login</button>
        <br/>
        <Link to="/sign-up">Don't have an account?</Link>
      </form>
    </div>
  );
}

export default CustomerLogin;
