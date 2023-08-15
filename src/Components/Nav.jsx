import  '../assets/tigrepag.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/tigrepag.png';

    function Nav() {
        return (
            <nav className="navbar">
              <div className="logo">
              <img
              src={logo}
             
             
              alt="Logo"
            />
              </div>
            <div className="nav-menu">
              <ul className='nav__menu'>
              <a href="https://www.tigre.gob.ar">Inicio</a>
              <li>Contacto</li>
              <li>Iniciar Sesion</li>
              <li>Registrarse</li>
              </ul>
            </div>
            <div className="menu-btn">
              <FontAwesomeIcon icon="bars" />
            </div>
          </nav>
        );
      }
      
      export default Nav;