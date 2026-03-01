import React from 'react';

const Tooltip: React.FC = () => (
  <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
    Tooltip on top
  </button>
);

export default Tooltip;
