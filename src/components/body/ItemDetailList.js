import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../assets/listProduct/arrayProducts";
import ItemDetail from "./ItemDetail"




const ItemDetailList = () =>{
  // hago la promesa con el delay
  const getProduct = new Promise((resolve, reject)=> {
    setTimeout( () => {resolve(arrayProducts)} , 2000);
  });
  
  //hago el request del array
  const getProductArray = async () => {
    try {
      const result = await getProduct;
      setProduct(result);
      console.log(result);
      
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar el producto en este momento');
    }
  };
  
  // funcion de filtrado por id y lo guarda en product detail
  
  const filterProductById = (array , id) => {
    return array.map( (product) => {
      if(product.id == id) {
        console.log("filter product", product);
        return setProductDetail(product)
      }
    })
  }
  // effect para arranque de vida
  useEffect( () => { getProductArray()
  }, []);  
  // effect cuando hay cambio de id
  useEffect( () => { 
    filterProductById(product, product.id) 
  }, [product.id]);
  
  
  
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
                        description={product.description} 
                        id={product.id} 
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