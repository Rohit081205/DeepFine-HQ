import React, { useState } from 'react';
import './PageStyles.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="page-container centered-page fade-in">
      <h1 className="page-title">Get in Touch</h1>
      <p className="page-text">
        Want to collaborate, sponsor, or just say hi? Fill out the form below and we’ll get back to you.
      </p>

      {loading && <div className="spinner">Loading form…</div>}

      <div className="form-card">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeMw0vZxiIPGkuOu52A0NUJl6XJPi-aLLX-FeWGYlCkGi6G9A/viewform?embedded=true"
          title="Contact Form"
          loading="lazy"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Contact;
