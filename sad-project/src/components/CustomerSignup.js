import React, { useState } from 'react';
import './CustomerSignup.css'; // Import CSS for styling
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios';

function CustomerSignup() {
  const [formData, setFormData] = useState({
    username: '',
    customerName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button on form submission

    // Validate the form
    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('Passwords do not match!');
        setIsSubmitting(false);
        return;
      }

      try {
        // Send form data to the server
        const response = await axios.post('http://localhost:8081/sign-up', formData);
        console.log(response.data);
        setSuccessMessage('Signup successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error during signup. Please try again.');
      }
    } else {
      setIsSubmitting(false); // Enable button again if validation fails
    }
  };

  return (
    <div className="signup-container">
      <h2>Customer Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span className="text-danger">{errors.username}</span>}

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        {errors.customerName && <span className="text-danger">{errors.customerName}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="text-danger">{errors.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-type Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errorMessage && <span className="text-danger">{errorMessage}</span>}

        {successMessage && <span className="text-success">{successMessage}</span>}

        <button type="submit" disabled={isSubmitting}>Sign Up</button>
      </form>

      <div className="form-footer">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default CustomerSignup;
