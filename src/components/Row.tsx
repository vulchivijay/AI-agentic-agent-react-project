import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RowProps {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => (
  <div className={`row${className ? ' ' + className : ''}`}>{children}</div>
);

export default Row;
