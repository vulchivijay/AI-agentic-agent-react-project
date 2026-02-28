import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AlertProps {
  variant?: string;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant = 'primary', children }) => (
  <div className={`alert alert-${variant}`} role="alert">
    {children}
  </div>
);

export default Alert;
