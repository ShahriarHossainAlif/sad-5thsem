import React, { useState } from 'react';
import "./LoginBoth.css";
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function CustomerLogin() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const navigate = useNavigate();

  // Handle input change
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login form submitted!");
    setIsSubmitting(true); // Disable button on form submission

    // Validate the form data
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("No validation errors. Sending request...");

      try {
        // Make the API call to login
        const response = await axios.post("http://localhost:8081/login", {
          email: values.email,
          password: values.password
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });
        console.log("Login data being sent:", values);

        console.log("API Response:", response.data);

        if (response.data.success) {
          // Store token in localStorage
          localStorage.setItem('authToken', response.data.token);
          setSuccessMessage("Login successful! Redirecting...");
          setTimeout(() => {
            // Redirect to user dashboard if login is successful
            navigate("/user");
          }, 2000);
        } else {
          setErrorMessage(response.data.message || "Invalid email or password");
        }
      } catch (error) {
        console.error("Error during login request:", error);
        setErrorMessage("Server error. Please try again.");
      }
    } else {
      setIsSubmitting(false); // Enable button again if validation fails
    }
  };

  return (
    <div className="form">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Customer Email"
            name="email"
            value={values.email}
            onChange={handleInput}
            required
            aria-describedby="emailError"
          /> <br/>
          {errors.email && <span id="emailError" className="text-danger" role="alert">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInput}
            required
            aria-describedby="passwordError"
          /> <br/>
          {errors.password && <span id="passwordError" className="text-danger" role="alert">{errors.password}</span>}
        </div>

        {successMessage && <span className="text-success">{successMessage}</span>}
        {errorMessage && <span className="text-danger">{errorMessage}</span>}

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>Login</button>
        </div>

        <div className="form-footer">
          <Link to="/sign-up">Don't have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default CustomerLogin;
