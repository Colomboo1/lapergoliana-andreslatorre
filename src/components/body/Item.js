import React from 'react';


const Item = ({ product }) => {
 
  return (
      
        <article className="product-card" id= {product.id} >
          <img className="product-card_image" src={product.img} alt="imagen de producto" />
          <h3 className="product-card_name">{product.name}</h3>
          <span className="product-card_price"> $ {product.price}</span>
        </article>
      
  );
};

export default Item;
