import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate form submission success
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form fields after submission
    } else {
      setSuccess(""); // Clear success message if validation fails
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form" aria-labelledby="contactFormTitle">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            aria-describedby="nameError"
          />
          {errors.name && <span id="nameError" className="error" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            aria-describedby="emailError"
          />
          {errors.email && <span id="emailError" className="error" role="alert">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            aria-describedby="messageError"
          ></textarea>
          {errors.message && <span id="messageError" className="error" role="alert">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
