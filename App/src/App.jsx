import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './Components/LoginModal';
import FormularioIngresoDatos from './Components/solicitoturno';
import zoonosis from './assets/zoonosis-icono-lateral.svg';
import zoonosisbody from './assets/zoonosis-icono-body.jpg';

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
      <br />
      <div className='header'>
        <h1 align="center">Bienvenido al centro de turnos de Zoonosis Tigre</h1>
      </div>
      <br />
      <div className='img-body'>
        <img src={zoonosisbody} alt='Icono Body'></img>
      </div>
      <br />
      <div className='info'>
        <div className='imagen-lateral'><img src={zoonosis} alt="Icono lateral" /></div>
        <h3 className='titulo-resaltado'>ZOONOSIS TIGRE</h3>
      </div>
      <br />
      <div className='solicitar-turno'>
        <FormularioIngresoDatos></FormularioIngresoDatos>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <h3>Requisitos para los vecinos</h3>
          <ul>
            <li>35 turnos de cirug&iacute;a por orden de llegada con el animal en la fila a partir de las 8:30 hs (un turno por animal por persona).</li>
            <li>Persona mayor de 18 años.</li>
            <li>Concurrir con DNI</li>
            <li>Los dueños deberán esperar en el lugar hasta que termine la cirugía.</li>
            <li>En caso de lluvia o mal tiempo, consultar telef&oacute;nicamente al centro de zoonosis.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Requisitos para las mascotas</h3>
          <ul>
            <li>Buen estado de salud, con correa y collar, mayores de 6 meses y menores de 7 años de edad (machos y hembras).</li>
            <li>Ayuno sólido - líquido de 12 hs.</li>
            <li>Si han tenido cría, se necesita dejar pasar 60 días luego de la fecha del parto.</li>
            <li>Traer una manta de abrigo grande.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
