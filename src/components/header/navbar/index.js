import React from "react";
import {Link} from "react-router-dom"
import "./styles.scss";
import Logo from "../../../assets/logo.svg";
import Cart from "../cart/index"

function NavBar () {

    return(
        <header>
            <div className="logo-navbar">
                <Link to={`/`}>
                    <div className="container-logo">
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                </Link>
                <ul className="navbar">
                    <li><button ><Link to={"/"}>home</Link></button></li>
                    <li><button ><Link to={"/"}>Productos</Link></button></li>
                    <li><button ><Link to={"/about"}>Nosotros</Link></button></li>
                    <li><button ><Link to={"/contact"}>Contactanos</Link></button></li>
                </ul>
                <Cart></Cart>
            </div>
        </header>
    )
}

export default NavBar;