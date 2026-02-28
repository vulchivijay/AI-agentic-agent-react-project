import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => (
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
