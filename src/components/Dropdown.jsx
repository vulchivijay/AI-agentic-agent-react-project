import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = ({ label, items = [] }) => (
  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      {label}
    </button>
    <ul className="dropdown-menu">
      {items.map((item, idx) => (
        <li key={idx}><a className="dropdown-item" href={item.href || '#'}>{item.label}</a></li>
      ))}
    </ul>
  </div>
);

export default Dropdown;
