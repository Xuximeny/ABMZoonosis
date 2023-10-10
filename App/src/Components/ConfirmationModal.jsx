import React from 'react';

function ConfirmationModal({ show, onClose, onConfirm }) {
  return (
    show && (
      <div className="modal-background">
        <div className="confirmation-modal">
          <p>¿Estás seguro de que deseas cerrar la sesión?</p>
          <button onClick={onConfirm}>Sí</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    )
  );
}

export default ConfirmationModal;
