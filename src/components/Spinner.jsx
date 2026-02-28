import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spinner = ({ variant = 'primary' }) => (
  <div className="d-flex justify-content-center">
    <div className={`spinner-border text-${variant}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Spinner;
