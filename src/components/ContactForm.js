import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file if it's separate

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic validation for empty fields
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Open the default mail client
    window.open(`mailto:domokos.balazs.88@gmail.com?subject=Contact from ${name}&body=${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
