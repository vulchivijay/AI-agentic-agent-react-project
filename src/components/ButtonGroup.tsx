import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonGroupProps {
  buttons: { label: string; onClick?: () => void; variant?: string }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => (
  <div className="btn-group" role="group">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        type="button"
        className={`btn btn-${btn.variant || 'secondary'}`}
        onClick={btn.onClick}
      >
        {btn.label}
      </button>
    ))}
  </div>
);

export default ButtonGroup;
