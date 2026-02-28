import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Badge = ({ variant = 'primary', children }) => (
  <span className={`badge bg-${variant}`}>{children}</span>
);

export default Badge;
