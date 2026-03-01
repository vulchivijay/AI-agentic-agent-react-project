import React from 'react';

const Spinner: React.FC = () => (
  <div className="spinner-border text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Spinner;
