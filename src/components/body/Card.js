import React from "react";
import "./styles/Card.scss";
import ItemCount from "./ItemCount.js"
import Item from "./Item"
import {Link} from  "react-router-dom";
import ItemDetail from "./ItemDetail";


function Card ({products}) {
    console.log(products)
    return(
        <div className="card">
            <Link to={"/:category/:id" }>
           {/*
          <Link to={"/" + products.category + "/" + products.id}> 
           */}
                <div href="Producto" className="product">
                    <Item product={products}/>
                </div>  
            </Link>{<ItemDetail product={products}/>}     
            <ItemCount/>

        </div>
    )
}

export default Card;