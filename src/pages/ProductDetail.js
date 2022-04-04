import ItemDetailList from "../components/body/ItemDetailList";
import { useParams ,Link } from "react-router-dom";


const ProductDetail = () => {
    let {id} = useParams();
    id = parseInt(id);
    console.log("product detail" + id);
    return (
        <>
            <ItemDetailList id={id}/>
            <Link to="/"> Volver atrás </Link>
        </>
    );
}


export default ProductDetail;