import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/tmuni2.jpg';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ContactModal from './ContactModal';
import ConfirmationModal from './ConfirmationModal'; // Importa el componente de modal de confirmación

function Nav() {
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [showingRegisterModal, setShowingRegisterModal] = useState(false);
  const [showingContactModal, setShowingContactModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleShowLoginModal = () => {
    setShowingLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowingLoginModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowingRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowingRegisterModal(false);
  };

  const handleShowContactModal = () => {
    setShowingContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowingContactModal(false);
  };

  const handleLogin = () => {
    // Lógica para el inicio de sesión exitoso
    setIsLoggedIn(true);
    handleCloseLoginModal();
  };

  const handleLogout = () => {
    // Mostrar el modal de confirmación antes de cerrar sesión
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    // Lógica para cerrar sesión
    setIsLoggedIn(false);
    setShowLogoutConfirmation(false); // Cierra el modal de confirmación
  };

  const handleRegister = () => {
    // Lógica para el registro
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="https://www.tigre.gob.ar">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="nav-menu">
        <ul className="nav__menu">
          <li onClick={handleShowContactModal}>Contacto</li>
          {!isLoggedIn ? (
            <>
              <li onClick={handleShowLoginModal}>Iniciar Sesión</li>
              <li onClick={handleShowRegisterModal}>Registrarse</li>
            </>
          ) : (
            <>
              <li onClick={handleLogout}>Cerrar Sesión</li>
              <li>Mis Turnos</li>
            </>
          )}
        </ul>
      </div>

      <LoginModal
        show={showingLoginModal}
        handleClose={handleCloseLoginModal}
        handleLogin={handleLogin}
      />
      <RegisterModal
        show={showingRegisterModal}
        handleClose={handleCloseRegisterModal}
        handleRegister={handleRegister}
      />
      <ContactModal
        show={showingContactModal}
        handleClose={handleCloseContactModal}
      />

      <ConfirmationModal
        show={showLogoutConfirmation}
        onClose={() => setShowLogoutConfirmation(false)}
        onConfirm={confirmLogout}
      />
    </nav>
  );
}

export default Nav;
