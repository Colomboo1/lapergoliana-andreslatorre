import ItemDetailList from "../components/body/ItemDetailList";
import { Link } from "react-router-dom";


const ProductDetail = () => {
    return (
        <>
            <Link to="/"> Volver</Link>
            <ItemDetailList/>
        </>
    );
}


export default ProductDetail;