import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../assets/listProduct/arrayProducts";
import ItemDetail from "./ItemDetail"

const ItemDetailList = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id, setProduct);
  }, []);

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

const getById = (id, array) => arrayProducts.find((el) => el.id === id);

const getProductById = async (id, setState) => {
  try {
    const result = await arrayProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};



export default ItemDetailList;