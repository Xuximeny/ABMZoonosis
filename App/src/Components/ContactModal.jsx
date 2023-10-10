import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactModal = ({ show, handleClose }) => {
  const contactInfo = {
    nombre: 'Municipio de Tigre',
    telefono: '4512-4400',
    correo: 'sirve@tigre.gob.ar',
    direccion: 'AV Cazon 1514, Tigre',
    latitud: -34.426518,
    longitud: -58.573816,
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Información de Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Nombre:</strong> {contactInfo.nombre}</p>
        <p><strong>Teléfono:</strong> <a href={`tel:${contactInfo.telefono}`}>{contactInfo.telefono}</a></p>
        <p><strong>Correo:</strong> <a href={`mailto:${contactInfo.correo}`}>{contactInfo.correo}</a></p>
        <p><strong>Dirección:</strong> <a href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.direccion}`} target="_blank" rel="noopener noreferrer">{contactInfo.direccion}</a></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
