import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => (
  <button className={`btn btn-${variant}`} {...props}>
    {children}
  </button>
);

export default Button;
