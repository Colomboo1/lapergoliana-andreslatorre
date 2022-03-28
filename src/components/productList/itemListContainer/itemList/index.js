import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../../../assets/listProduct/arrayProducts.js";
import Item from "../item/index.js"


const ProductsListArray = () =>{

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject)=> {
        setTimeout( () => {resolve(arrayProducts)} , 2000);
    });

    const getProductsArray = async () => {
        try {
          const result = await getProducts;
          setProducts(result);
        } catch (error) {
          console.log(error);
          alert('No podemos mostrar los productos en este momento');
        }
      };
 
      useEffect(() => {
        getProductsArray();
      }, []);  
    
      return (
        <div className="product-list-container">
          {
            products.length ? ( <>
              {
                 products.map((product) => {
    
                    return (
                      <div key={product.id}>
                        <Item name={product.name} thumbnail={product.thumbnail} price={product.price} stock={product.stock} id={product.id}/>
                      </div>
                    );
                  })
                }
              </>
            ) : (<p>Cargando productos...</p>)
          }
        </div>
      );
}

export default ProductsListArray;