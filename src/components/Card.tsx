import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  title?: string;
  text?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, children }) => (
  <div className="card" style={{ width: '18rem' }}>
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      {text && <p className="card-text">{text}</p>}
      {children}
    </div>
  </div>
);

export default Card;
