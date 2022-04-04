import React from 'react';


const ItemDetail = ({ product}) => {
    
    return (
        <article className="product_card" >
            <img className="product_card_image" src={product.img} alt="imagen de producto" />
            <h3 className="product_card_name">{product.name}</h3>
            <span className="product_card_price">$ {product.price}</span>
            <p className='product_card_description'>{product.description}</p>
        </article>
    );
};

export default ItemDetail;
