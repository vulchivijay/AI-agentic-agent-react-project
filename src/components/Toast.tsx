import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'absolute', top: 20, right: 20 }}>
      <div className="toast-header">
        <strong className="me-auto">Notification</strong>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="toast-body">
        {message}
      </div>
    </div>
  );
};

export default Toast;
