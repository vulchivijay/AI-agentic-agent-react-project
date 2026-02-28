import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ColProps {
  children: React.ReactNode;
  size?: string | number;
  className?: string;
}

const Col: React.FC<ColProps> = ({ children, size, className }) => {
  let colClass = 'col';
  if (size) colClass += `-${size}`;
  if (className) colClass += ` ${className}`;
  return <div className={colClass}>{children}</div>;
};

export default Col;
