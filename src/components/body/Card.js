import React from "react";
import "./styles/Card.scss";
import ItemCount from "./ItemCount.js"
import ItemDetailList from "./ItemDetailList";
import {Link} from  "react-router-dom";



function Card () {
    return(
        <div className="card">
                <div href="Producto" className="product">
                    <ItemDetailList/>
                </div> 
            <ItemCount/>
        </div>
    )
}

export default Card;