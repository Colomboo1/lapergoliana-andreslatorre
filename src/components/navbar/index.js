import React from "react";
import "../navbar/index.css";
import Logo from "../../assets/logo.svg";
import Button from '@mui/material/Button';

function NavBar () {

    return(
        <header>
            <div className="container-logo">
            <img src={Logo} alt="Logo" className="logo"/>
            </div>
            <ul className="navbar">
                <li><Button variant="contained">home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotras</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;