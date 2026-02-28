import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ children, ...props }) => (
  <form {...props}>
    {children}
  </form>
);

export default Form;
