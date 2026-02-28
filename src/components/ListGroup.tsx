import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ListGroupProps {
  items?: string[];
  flush?: boolean;
}

const ListGroup: React.FC<ListGroupProps> = ({ items = [], flush = false }) => (
  <ul className={`list-group${flush ? ' list-group-flush' : ''}`}>
    {items.map((item, idx) => (
      <li key={idx} className="list-group-item">{item}</li>
    ))}
  </ul>
);

export default ListGroup;
