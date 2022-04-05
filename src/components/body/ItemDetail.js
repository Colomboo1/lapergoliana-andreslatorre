import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    return (
        
        <div href="Producto" className="product">
            {product.map(product=>
                <Link to={`/product/${product.id}`}> 
                    <article className="product_card" >
                      <img className="product_card_image" src={product.img} alt="imagen de producto" />
                       <h3 className="product_card_name">{product.name}</h3>
                      <span className="product_card_price">$ {product.price}</span>
                       <p className='product_card_description'>{product.description}</p>
                    </article>
                </Link> 
            )};
            </div>  
        
    );
};

export default ItemDetail;
