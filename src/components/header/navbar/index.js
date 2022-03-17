import React from "react";
import "./styles.scss";
import Logo from "../../../assets/logo.svg";


function NavBar () {

    return(
        <header>
            <div className="logo-navbar">
                <div className="container-logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                <ul className="navbar">
                    <li><button >home</button></li>
                    <li><button >Productos</button></li>
                    <li><button >Nosotras</button></li>
                    <li><button >Contacto</button></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;