
import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../assets/listProduct/arrayProducts";
import Card from "./Card"


const ItemList = () =>{
  
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
    
    useEffect(() => { getProductsArray() }, []);  
    
    return (
      <div className="product-list-container">
        {
          products.length ? ( <>
            {
                products.map((products) => {
                  return (
                    <div key={products.id}>
                      <Card products={products}/>

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

export default ItemList;