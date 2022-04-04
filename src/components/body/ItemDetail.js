import React from 'react';


const ItemDetail = ({ name, img, price, description, id, category}) => {
    
    return (
        <article className="product_card" >
        <img className="product_card_image" src={img} alt="imagen de producto" />
        <h3 className="product_card_name">{name}</h3>
        <span className="product_card_price">$ {price}</span>
        <p className='product_card_description'>{description}</p>
        </article>
    );
};

export default ItemDetail;
