import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <button type="button" className="btn-close" aria-label="Close" onClick={onClick}></button>
);

export default CloseButton;
