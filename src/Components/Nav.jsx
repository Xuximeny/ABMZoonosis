import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/tigrepag.png';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ContactModal from './ContactModal';

function Nav() {
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [showingRegisterModal, setShowingRegisterModal] = useState(false);
  const [showingContactModal, setShowingContactModal] = useState(false);

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
    // Lógica para el inicio de sesión
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
          <li>
            <input type="text" placeholder="Buscar" />
          </li>
          <li onClick={handleShowLoginModal}>Iniciar Sesión</li>
          <li onClick={handleShowRegisterModal}>Registrarse</li>
        </ul>
      </div>
      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
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
    </nav>
  );
}

export default Nav;
