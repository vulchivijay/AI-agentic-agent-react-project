import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Breadcrumb = ({ items = [] }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {items.map((item, idx) => (
        <li key={idx} className={`breadcrumb-item${item.active ? ' active' : ''}`} aria-current={item.active ? 'page' : undefined}>
          {item.active ? item.label : <a href={item.href || '#'}>{item.label}</a>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
