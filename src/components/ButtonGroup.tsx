import React from 'react';

const ButtonGroup: React.FC = () => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-primary">Left</button>
    <button type="button" className="btn btn-primary">Middle</button>
    <button type="button" className="btn btn-primary">Right</button>
  </div>
);

export default ButtonGroup;
