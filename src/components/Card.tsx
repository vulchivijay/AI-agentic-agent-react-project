import React from 'react';

const Card: React.FC = () => (
  <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">Card Title</h5>
      <p className="card-text">Some quick example text to build on the card title.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);

export default Card;
