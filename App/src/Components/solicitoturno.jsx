import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const localidadesOptions = [
  'Don Torcuato',
  'Ricardo Rojas',
  'El Talar',
  'General Pacheco',
  'Benavídez',
  'Los Troncos del Talar',
  'Dique Luján',
  'Rincón de Milberg',
  'Nordelta',
];

function FormularioIngresoDatos() {
  const [showModal, setShowModal] = useState(false);
  const [dni, setDni] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [nombreAnimal, setNombreAnimal] = useState('');
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDniChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    let formattedDni = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    setDni(formattedDni);
  };

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case 'localidad':
        setLocalidad(e.target.value);
        break;
      case 'fecha':
        setFecha(e.target.value);
        break;
      case 'nombreAnimal':
        setNombreAnimal(e.target.value);
        break;
      case 'tipoAnimal':
        setTipoAnimal(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza el manejo de envío de datos
    // ...

    // Luego de realizar el envío, establece el mensaje y restablece el estado del modal
    setMensaje('Enviado Correctamente');
    setDni('');
    setLocalidad('');
    setFecha('');
    setNombreAnimal('');
    setTipoAnimal('');
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Solicitar Turno
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mensaje && <div>{mensaje}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dni">
              <Form.Label>DNI:</Form.Label>
              <Form.Control
                type="text"
                value={dni}
                onChange={handleDniChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="localidad">
              <Form.Label>Localidad:</Form.Label>
              <Form.Control
                as="select"
                value={localidad}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona una localidad</option>
                {localidadesOptions.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="fecha">
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="nombreAnimal">
              <Form.Label>Nombre del Animal:</Form.Label>
              <Form.Control
                type="text"
                value={nombreAnimal}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="tipoAnimal">
              <Form.Label>Tipo de Animal:</Form.Label>
              <Form.Control
                type="text"
                value={tipoAnimal}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormularioIngresoDatos;
