import React from "react";
import "./styles.scss";
import ItemCount from "../itemCount/index.js"
import Item from "../item/index"


function Card ({products}) {

    return(
        <div className="card">
            <a href="Producto" className="product"><Item name={products.name} img={products.img} price={products.price} stock={products.stock} id={products.id}/></a>  
            <ItemCount/>

        </div>
    )
}

export default Card;