import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, handleClose, handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación adecuada
    // Por ejemplo, verificar si el nombre de usuario y contraseña son válidos
    // Simularemos una autenticación simple con valores predefinidos
    if (username === 'usuario' && password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      handleLogin();
    } else {
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
