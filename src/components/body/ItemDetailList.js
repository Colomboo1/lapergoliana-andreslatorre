import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../assets/listProduct/arrayProducts";
import ItemDetail from "./ItemDetail"

// pedido del producto especifico
const getById = (id, arrayProducts) => {
  
  return arrayProducts.find((el) => el.id === id);
} 


//llamado de asincrono del array
const getProductById = async (id, setState) => {
  try {
    const result = await arrayProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

const ItemDetailList = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id, setProduct);
  }, []);

  console.log("el product es " +product);
  
  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};




export default ItemDetailList;