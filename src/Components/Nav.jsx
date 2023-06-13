import '../assets/css/Nav.css'
import  '../assets/muni.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faFontAwesome, faBars);

function Nav () {

    return (
        
         <nav class="navbar">
            <div class="logo"></div>
            <div class="menu-btn"></div>
            <FontAwesomeIcon icon="bars"/>
            <div class="logo">
                <img src="../assets/css/muni.jpg" alt="logo" />
            </div>
             <div class="menu">
                <a href="Municipio">Municipio</a></div>  
                <button class="log-in">Cuenta</button>
                <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2 align="center">Ingresar Cuenta</h2>
                    <form>
                     <label for="username">Username:</label>
                        <input type="text" id="username" name="username"></input>
                        <label for="password">Password:</label>
                         <input type="password" id="password" name="password"></input>
                        <button type="submit">Ingresar</button>
                    
                    </form>
            </div> 
       
            <div class="menu-btn">
            <FontAwesomeIcon icon="bars" />
            </div>
            
        </nav>
    
    )
} 

export default Nav