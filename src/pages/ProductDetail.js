import ItemDetailList from "../components/body/ItemDetailList";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams();
    return <ItemDetailList id={id}/>
}


export default ProductDetail;