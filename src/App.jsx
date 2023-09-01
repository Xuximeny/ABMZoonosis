import { useState } from 'react';
import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchModal from './Components/SearchModal';
import ReactDOM from 'react-dom';
import LoginModal from './Components/LoginModal';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [activeInput, setActiveInput] = useState('');
  const [showingSearchModal, setShowSearchModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleItemClick = (itemName) => {
    setActiveInput(itemName);
  };

  const handleShowSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <>

      <div>
        <Nav></Nav>
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
        </div>

        {/* ... */}

        <ul className="menu">
          <li>
            <a href="#" onClick={handleShowSearchModal}>
              Buscar turno
            </a>
          </li>
        </ul>
      </div>

      {/* ... */}

      {showingSearchModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseSearchModal}>
              &times;
            </span>
            <ul className="modal-options">
              <li>Nombre</li>
              <li>DNI</li>
              <li>Distrito</li>
            </ul>
          </div>
        </div>
      )}

  

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
