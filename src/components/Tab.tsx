import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  items: TabItem[];
}

const Tab: React.FC<TabProps> = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <ul className="nav nav-tabs">
        {items.map((item, idx) => (
          <li key={idx} className="nav-item">
            <button className={`nav-link${active === idx ? ' active' : ''}`} onClick={() => setActive(idx)}>{item.label}</button>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3 border border-top-0 rounded-bottom">
        <div className="tab-pane fade show active">{items[active].content}</div>
      </div>
    </>
  );
};

export default Tab;
