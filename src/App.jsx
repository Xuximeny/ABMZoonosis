import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DataTable from './Components/DataTable'

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
      <Nav></Nav>

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

              <DataTable></DataTable>

    </>
  );
}

export default App;
