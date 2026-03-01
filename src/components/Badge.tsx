import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BadgeProps {
  text: string;
  variant?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, variant = 'secondary' }) => (
  <span className={`badge bg-${variant}`}>{text}</span>
);

export default Badge;
