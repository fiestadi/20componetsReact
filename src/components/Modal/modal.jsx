import React from 'react';
import './modal.module.css';
const Modal = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? 'flex' : 'none',
  };

  return (
    <div className="modal" style={modalStyles}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
