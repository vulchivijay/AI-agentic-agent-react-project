import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({ type = 'text', ...props }) => (
  <input type={type} className="form-control" {...props} />
);

export default Input;
