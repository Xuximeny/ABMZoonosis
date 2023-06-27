import React, { useState } from 'react';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario y procesar los datos de inicio de sesión
    // Por ejemplo, puedes utilizar fetch() para enviar una solicitud POST al servidor
    // y manejar la respuesta del servidor según sea necesario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Cierra el modal después de enviar el formulario (puedes ajustar esto según tus necesidades)
    closeModal();
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button onClick={openModal}>Iniciar sesión</button>

      {/* Modal de inicio de sesión */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Iniciar sesión</h2>
            <form onSubmit={submitForm}>
              {/* Campos de entrada para el nombre de usuario y contraseña */}
              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {/* Botón para enviar el formulario */}
              <button type="submit">Iniciar sesión</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
