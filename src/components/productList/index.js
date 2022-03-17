import React from "react";
import "./styles.scss";

import { GiClothes } from "react-icons/gi";

function ProductList () {

    return(
        <a href="Producto" className="product">
            <i className='icon-product' type= 'icon'><GiClothes/></i>
            <span>producto</span>
      </a>    
    )
}

export default ProductList;