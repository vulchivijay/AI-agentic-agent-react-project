import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ToastProps {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ show, title, children, onClose }) => (
  <div className={`toast${show ? ' show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <strong className="me-auto">{title}</strong>
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
    <div className="toast-body">{children}</div>
  </div>
);

export default Toast;
