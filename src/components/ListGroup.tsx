import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ListGroupProps {
  items: { label: string; active?: boolean; onClick?: () => void }[];
}

const ListGroup: React.FC<ListGroupProps> = ({ items }) => (
  <ul className="list-group">
    {items.map((item, idx) => (
      <li
        key={idx}
        className={`list-group-item${item.active ? ' active' : ''}`}
        onClick={item.onClick}
        style={{ cursor: item.onClick ? 'pointer' : 'default' }}
      >
        {item.label}
      </li>
    ))}
  </ul>
);

export default ListGroup;
