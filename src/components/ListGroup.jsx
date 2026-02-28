import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListGroup = ({ items = [], flush = false }) => (
  <ul className={`list-group${flush ? ' list-group-flush' : ''}`}>
    {items.map((item, idx) => (
      <li key={idx} className="list-group-item">{item}</li>
    ))}
  </ul>
);

export default ListGroup;
