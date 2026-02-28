import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => (
  <span className="d-inline-block" tabIndex={0} data-bs-toggle="tooltip" title={text}>
    {children}
  </span>
);

export default Tooltip;
