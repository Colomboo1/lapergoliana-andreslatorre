import React from 'react';


const Item = ({ name, img, price }) => {
 
  return (
    <article className="product-card">
      <img className="product-card_image" src={img} alt="imagen de producto" />
      <h3 className="product-card_name">{name}</h3>
      <span className="product-card_price">${price}</span>
    </article>
  );
};

export default Item;
