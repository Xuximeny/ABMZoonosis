import  '../assets/tigrepag.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tigrepag from './imagen';

    function Nav() {
        return (
            <nav className="navbar">
              <div className="logo">
              <img src={tigrepag} alt="logo" />
              </div>
            <div className="menu">
              <a href="https://www.tigre.gob.ar">Municipio</a>
            </div>
            <div className="menu-btn">
              <FontAwesomeIcon icon="bars" />
            </div>
          </nav>
        );
      }
      
      export default Nav;