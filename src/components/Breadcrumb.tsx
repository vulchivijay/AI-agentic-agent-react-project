import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`breadcrumb-item${idx === items.length - 1 ? ' active' : ''}`}
          aria-current={idx === items.length - 1 ? 'page' : undefined}
        >
          {item.href && idx !== items.length - 1 ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
