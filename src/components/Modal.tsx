import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog" style={{background: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)}></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
