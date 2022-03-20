import React from "react";
import { GiClothes } from "react-icons/gi";
import "./styles.scss";
import ItemCount from "../itemCount/index.js"



function ProductList () {

    return(
        <div className="card">
            <i className='icon-product' type= 'icon'><GiClothes size="10em"/></i>
            <a href="Producto" className="product"><span>producto</span></a>  
            <ItemCount></ItemCount>

        </div>
    )
}

export default ProductList;