import React from "react";
import "./styles.scss";
import ItemCount from "../itemCount/index.js"
import Item from "../item/index"
import ItemDetailList from "../itemDetailList";
import {Link} from  "react-router-dom";


function Card ({products}) {

    return(
        <Link to="/:category/:id" element={<ItemDetailList/>}>
            <div className="card">
                <a href="Producto" className="product"><Item product={products}/></a>  
                <ItemCount/>

            </div>
        </Link>
    )
}

export default Card;