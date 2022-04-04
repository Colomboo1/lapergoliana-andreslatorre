import React from "react";
import "./styles/Card.scss";
import ItemCount from "./ItemCount.js"
import Item from "./Item"
import {Link} from  "react-router-dom";



function Card ({products}) {
    console.log(products)
    return(
        <div className="card">
           <Link to={"/product/" + products.id}> 
                <div href="Producto" className="product">
                    <Item product={products}/>
                </div>  
            </Link>    

            <ItemCount/>
        </div>
    )
}

export default Card;