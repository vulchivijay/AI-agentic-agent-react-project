import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavProps {
  items: { label: string; href: string; active?: boolean }[];
}

const Nav: React.FC<NavProps> = ({ items }) => (
  <ul className="nav">
    {items.map((item, idx) => (
      <li className="nav-item" key={idx}>
        <a className={`nav-link${item.active ? ' active' : ''}`} href={item.href}>
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export default Nav;
