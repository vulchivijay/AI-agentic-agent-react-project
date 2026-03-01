import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <span
      className="d-inline-block position-relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ cursor: 'pointer' }}
    >
      {children}
      {show && (
        <span
          className="tooltip bs-tooltip-top show"
          style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, background: '#000', color: '#fff', padding: '5px 10px', borderRadius: '4px', fontSize: '0.875rem' }}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
