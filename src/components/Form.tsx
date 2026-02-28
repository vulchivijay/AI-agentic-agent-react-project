import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <form {...props}>
    {children}
  </form>
);

export default Form;
