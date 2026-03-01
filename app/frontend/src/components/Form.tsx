import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="mb-3">
    {children}
  </form>
);

export default Form;
