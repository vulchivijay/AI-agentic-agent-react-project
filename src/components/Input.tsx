import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', ...props }) => (
  <input type={type} className="form-control" {...props} />
);

export default Input;
