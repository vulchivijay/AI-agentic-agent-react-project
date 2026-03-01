import React from 'react';

const Toast: React.FC = () => (
  <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" className="rounded me-2" alt="..." style={{width: '20px'}} />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
);

export default Toast;
