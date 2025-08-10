import React, { useState } from 'react';
import './PageStyles.css';

const SubmitForm = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="page-container centered-page fade-in">
      <h1 className="page-title">Submit Your Cricket Clip</h1>
      <p className="page-text">
        Got a fiery spell or a powerful knock? Submit your turf cricket videos and get featured!
      </p>

      {loading && <div className="spinner">Loading form…</div>}

      <div className="form-card">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScy8ckOGm9jyZX1E4dGedvT0bBYm4gdRdfJcPUUQWZilho80A/viewform?embedded=true"
          title="Cricket Clip Submission Form"
          loading="lazy"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default SubmitForm;