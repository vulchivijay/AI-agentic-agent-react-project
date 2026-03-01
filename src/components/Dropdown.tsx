import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DropdownProps {
  label: string;
  items: { label: string; onClick?: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" onClick={() => setOpen(!open)}>
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded={open}>
        {label}
      </button>
      <ul className={`dropdown-menu${open ? ' show' : ''}`}> 
        {items.map((item, idx) => (
          <li key={idx}>
            <button className="dropdown-item" onClick={item.onClick}>{item.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
