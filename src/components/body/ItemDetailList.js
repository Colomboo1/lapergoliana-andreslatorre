import React,{useState,useEffect} from "react";
import { arrayProducts } from "../../assets/listProduct/arrayProducts";
import ItemDetail from "./ItemDetail";
import { useParams, Link} from "react-router-dom";



const getProducts = new Promise((res) => {
  setTimeout( () => {res(arrayProducts)} , 2000);
});


const ItemDetailList = () => {
  const[product,setProduct] = useState([]);
  const{id} = useParams();

  useEffect(() =>{
    getProducts
      .then((product) =>{
        if(id){
          const idProduct = product.filter((e)=> e.id ===id);
          setProduct(idProduct);
        }
        else{
          setProduct(product);
        }
      }) 
      .catch((err)=>{
        console.log(err);
        alert('No podemos mostrar los productos en este momento');
      },[id])
  })

return(
  <section>
    {product ? <ItemDetail product={product}/> : <p>Recibiendo Productos</p>}
  </section>
)
}

export default ItemDetailList