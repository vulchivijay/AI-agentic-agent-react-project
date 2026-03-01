import React from 'react';

const Offcanvas: React.FC = () => (
  <>
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      Toggle Offcanvas
    </button>
    <div className="offcanvas offcanvas-start show" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{visibility: 'visible', position: 'relative'}}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div>
          Some text as placeholder. In real usage, offcanvas would slide in/out.
        </div>
      </div>
    </div>
  </>
);

export default Offcanvas;
