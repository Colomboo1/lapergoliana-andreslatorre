import React from "react";
import "./styles/Cart.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"; 
function Cart () {

    return(
        
        <Link to ="/BuyCart">
            <i className='icon-cart' type= 'icon'></i>
            <span>mi carrito</span>
            <AiOutlineShoppingCart/>
        </Link>
        
    )
}

export default Cart;