import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BadgeProps {
  variant?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children }) => (
  <span className={`badge bg-${variant}`}>{children}</span>
);

export default Badge;
