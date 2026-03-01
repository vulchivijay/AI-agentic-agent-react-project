import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AlertProps {
  message: string;
  variant?: string;
}

const Alert: React.FC<AlertProps> = ({ message, variant = 'primary' }) => (
  <div className={`alert alert-${variant}`} role="alert">
    {message}
  </div>
);

export default Alert;
