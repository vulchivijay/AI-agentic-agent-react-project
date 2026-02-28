import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ variant = 'primary', children }) => (
  <div className={`alert alert-${variant}`} role="alert">
    {children}
  </div>
);

export default Alert;
