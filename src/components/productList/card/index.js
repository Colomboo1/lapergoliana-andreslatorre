import React from "react";
import { GiClothes } from "react-icons/gi";
import "./styles.scss";
import ItemCount from "../itemCount/index.js"
import Item from "../itemListContainer/item/index.js"


function ProductList () {

    return(
        <div className="card">
            <a href="Producto" className="product">
                <Item/>
                </a>  
            <ItemCount/>

        </div>
    )
}

export default ProductList;