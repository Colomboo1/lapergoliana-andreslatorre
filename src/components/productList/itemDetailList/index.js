import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../../assets/listProduct/arrayProducts.js";
import ItemDetail from "../itemDetail/index"
import { useParams } from 'react-router-dom';




const ItemDetailList = () =>{
  
  const getProduct = new Promise((resolve, reject)=> {
    setTimeout( () => {resolve(arrayProducts)} , 2000);
  });
  
  const getProductArray = async () => {
    try {
      const result = await getProduct;
      setProduct(result);
      
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar el producto en este momento');
    }
  };
  
  // funcion de filtrado por id
  
  const filterProductById = (array , id) => {
    return array.map( (product) => {
      if(product.id == id) {
        console.log("filter product", product);
        return setProductDetail(product)
      }
    })
  }
  // effect para arranque de vida
  useEffect( () => { getProductArray() }, []);  
  // effect cuando hay cambio de id
  useEffect( () => { filterProductById(product, id) }, [id]);
  
  
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productDetail, setProductDetail] = useState([]);
  
  
  return (
    <div className="product-list-container">
        {
          productDetail.length ? ( <>
            {
                productDetail.map((product) => {
                  return (
                    <div key={product.id}>
                      <ItemDetail 
                        name={product.name} 
                        img={product.img} 
                        price={product.price} 
                        id={product.id} 
                        description={product.description} 
                        category={product.category}
                      />

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

export default ItemDetailList;