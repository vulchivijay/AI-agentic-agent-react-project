import React from 'react';

const ProgressBarMultiple: React.FC = () => (
  <div className="progress">
    <div className="progress-bar bg-success" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
    <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
  </div>
);

export default ProgressBarMultiple;
