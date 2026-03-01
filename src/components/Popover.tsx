import React from 'react';

const Popover: React.FC = () => (
  <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
    Click to toggle popover
  </button>
);

export default Popover;
