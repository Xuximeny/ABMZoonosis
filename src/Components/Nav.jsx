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
                <a href="tigre.jpg">Logo</a> </div>
             <div class="menu">
                <a href="Municipio">Municipio</a></div>  
                <button class="log-in">Cuenta</button> 
            <div class="menu-btn">
            <FontAwesomeIcon icon="bars" />
            </div>
        </nav>
    )
} 

export default Nav