import React from "react";
import "./index.scss";
import Logo from "../../assets/logo.svg";
import Button from '@mui/material/Button'

function NavBar () {

    return(
        <header>
            <div className="header-contain">
                <div className="container-logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                <ul className="navbar">
                    <li><Button variant="contained" color="secondary" size="small">home</Button></li>
                    <li><Button variant="contained" color="secondary" size="small">Productos</Button></li>
                    <li><Button variant="contained" color="secondary" size="small">Nosotras</Button></li>
                    <li><Button variant="contained" color="secondary" size="small">Contacto</Button></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;