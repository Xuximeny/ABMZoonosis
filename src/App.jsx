import { useState } from 'react';
import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './Components/LoginModal';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [showingLoginModal, setShowLoginModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleItemClick = (itemName) => {
    setActiveInput(itemName);
  };
  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    handleCloseLoginModal();
  };

  return (
    <>

      <div>
        <Nav></Nav>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>


        <label class="labeluno" htmlFor="pet-select">Animal</label>
        <select name="pets" id="pet-select">
          <option value="">Choose an option</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Hamster">Hamster</option>
          <option value="Caballo">Caballo</option>
        </select>

        <form action="/procesar_formulario" method="POST">
  <label htmlFor="name">
    Nombre: <span className="req">*</span>
  </label>
  <input name="Nombre" type="text" required />

  <label htmlFor="Nacimiento">Día de Turno</label>
  <input name="Nacimiento" type="date" />
  <input type="submit" value="Enviar"/>
</form>
<button onClick={handleShowLoginModal}>Iniciar sesión</button>
      </div>
      <LoginModal
   show={showingLoginModal}
   handleClose={handleCloseLoginModal}
   handleLogin={handleLogin}
   />
    </>
  );
}

export default App;
