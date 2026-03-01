import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface InputGroupProps {
  prepend?: string;
  append?: string;
  children: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = ({ prepend, append, children }) => (
  <div className="input-group mb-3">
    {prepend && <span className="input-group-text">{prepend}</span>}
    {children}
    {append && <span className="input-group-text">{append}</span>}
  </div>
);

export default InputGroup;
