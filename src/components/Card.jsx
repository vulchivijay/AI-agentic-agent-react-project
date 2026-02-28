import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, text, children }) => (
  <div className="card" style={{ width: '18rem' }}>
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      {text && <p className="card-text">{text}</p>}
      {children}
    </div>
  </div>
);

export default Card;
