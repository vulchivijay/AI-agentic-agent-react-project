import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
