import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  title: string;
  text: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, text, imageUrl }) => (
  <div className="card" style={{ width: '18rem' }}>
    {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default Card;
