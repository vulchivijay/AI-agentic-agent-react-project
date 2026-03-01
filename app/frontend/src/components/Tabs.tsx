import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab, idx) => (
          <li className="nav-item" key={idx}>
            <button
              className={`nav-link${active === idx ? ' active' : ''}`}
              onClick={() => setActive(idx)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane fade show active">
          {tabs[active].content}
        </div>
      </div>
    </>
  );
};

export default Tabs;
