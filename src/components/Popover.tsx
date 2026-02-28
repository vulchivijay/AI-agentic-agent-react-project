import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PopoverProps {
  title?: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ title, content, children }) => (
  <span className="d-inline-block" tabIndex={0} data-bs-toggle="popover" data-bs-title={title} data-bs-content={typeof content === 'string' ? content : undefined}>
    {children}
  </span>
);

export default Popover;
