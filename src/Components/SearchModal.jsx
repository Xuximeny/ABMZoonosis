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
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { Usuarios } from '../DataSet/usuarios';

const LoginModal = ({ show, handleClose, handleLogin }) => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleCloseWithDelay = () => {
    setLoginSuccess(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={loginSuccess ? handleCloseWithDelay : handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            const foundUser = Usuarios.find(
              (user) =>
                user.usuario === values.username && user.contraseña === values.password
            );

            if (foundUser) {
              console.log('Inicio de sesión exitoso');
              setStatus('success');
              handleLogin();
              setLoginSuccess(true);
              setTimeout(handleCloseWithDelay, 1000);
            } else {
              console.log('Nombre de usuario o contraseña incorrectos');
              setStatus('error');
            }

            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting, status }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="usuario">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="contraseña">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Iniciar sesión
              </Button>
              <div>
                {status === 'success' ? (
                  <p>Inicio de sesión exitoso</p>
                ) : status === 'error' ? (
                  <p>Nombre de usuario o contraseña incorrectos</p>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
