import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/Nav';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [activeInput, setActiveInput] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleItemClick = (itemName) => {
    setActiveInput(itemName);
  };

  return (
    <>
      <Nav />

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul>
          <li>
            <a href="#" onClick={() => handleItemClick('Nombre')}>
              Nombre
            </a>
            {activeInput === 'Nombre' && (
              <input
                type="text"
                value={textValue}
                onChange={handleInputChange}
                placeholder="Escribe aquí"
              />
            )}
          </li>
          <li>
            <a href="#" onClick={() => handleItemClick('Mes')}>
              Mes
            </a>
            {activeInput === 'Mes' && (
              <input
                type="text"
                value={textValue}
                onChange={handleInputChange}
                placeholder="Escribe aquí"
              />
            )}
          </li>
          <li>
            <a href="#" onClick={() => handleItemClick('Dia')}>
              Día
            </a>
            {activeInput === 'Dia' && (
              <input
                type="text"
                value={textValue}
                onChange={handleInputChange}
                placeholder="Escribe aquí"
              />
            )}
          </li>
          {/* Agrega más opciones según sea necesario */}
        </ul>
      </div>

      {/* Contenido principal de la página */}
      <div className="content">
        {/* Aquí va el contenido principal de tu página */}
      </div>
    </>
  );
}

export default App;
