import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SearchModal = ({ show, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar la acción deseada según la opción seleccionada
    console.log('Opción seleccionada:', selectedOption);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Buscar turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Selecciona una opción:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
              <option value="nombre">Nombre</option>
              <option value="dni">DNI</option>
              <option value="distrito">Distrito</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Buscar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
