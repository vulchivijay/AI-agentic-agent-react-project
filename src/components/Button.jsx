import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ variant = 'primary', children, ...props }) => (
  <button className={`btn btn-${variant}`} {...props}>
    {children}
  </button>
);

export default Button;
