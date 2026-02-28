import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, variant = 'primary' }) => (
  <div className="progress">
    <div className={`progress-bar bg-${variant}`} role="progressbar" style={{ width: `${(value / max) * 100}%` }} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      {value}%
    </div>
  </div>
);

export default ProgressBar;
