import React from 'react';

const ProgressBar: React.FC = () => (
  <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
);

export default ProgressBar;
