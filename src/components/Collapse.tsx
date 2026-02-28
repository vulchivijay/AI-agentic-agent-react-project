import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CollapseProps {
  children: React.ReactNode;
  show?: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ children, show = false }) => (
  <div className={`collapse${show ? ' show' : ''}`}>{children}</div>
);

export default Collapse;
