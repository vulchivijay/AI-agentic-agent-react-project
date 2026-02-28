import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface NavProps {
  items: NavItem[];
}

const Nav: React.FC<NavProps> = ({ items }) => (
  <ul className="nav">
    {items.map((item, idx) => (
      <li key={idx} className="nav-item">
        <a className={`nav-link${item.active ? ' active' : ''}`} href={item.href || '#'}>{item.label}</a>
      </li>
    ))}
  </ul>
);

export default Nav;
