
import React from "react";
import "./styles.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";

function Cart () {

    return(
        <a href="/mi-carrito" className="cart">
            <i className='icon-cart' type= 'icon'><AiOutlineShoppingCart/></i>
            <span>mi carrito</span>
      </a>    
    )
}

export default Cart;