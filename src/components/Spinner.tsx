import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface SpinnerProps {
  variant?: string;
  size?: 'sm' | '';
}

const Spinner: React.FC<SpinnerProps> = ({ variant = 'primary', size = '' }) => (
  <div className={`spinner-border text-${variant} ${size === 'sm' ? 'spinner-border-sm' : ''}`} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Spinner;
