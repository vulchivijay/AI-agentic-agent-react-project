import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ show, title, children, onClose }) => (
  <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  </div>
);

export default Modal;
