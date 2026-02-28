import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface OffcanvasProps {
  show: boolean;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ show, title, children, onClose }) => (
  <div className={`offcanvas offcanvas-start${show ? ' show' : ''}`} tabIndex={-1} style={{ visibility: show ? 'visible' : 'hidden' }}>
    <div className="offcanvas-header">
      {title && <h5 className="offcanvas-title">{title}</h5>}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
    <div className="offcanvas-body">{children}</div>
  </div>
);

export default Offcanvas;
