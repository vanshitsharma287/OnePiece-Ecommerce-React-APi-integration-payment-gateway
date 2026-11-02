import { useNavigate } from "react-router";
import "../css/Products.css";

const Products = (props) => {
    const {products} = props;
    const navigate = useNavigate();
    return(
        <section className="products">
                {products.map(pro => (
                 <div className="product-card" onClick={() => navigate(`/product/${pro.id}`)}>
                <img src={pro.thumbnail} alt="img" />
                 <h4>{pro.title}</h4>
                <small>$ {pro.price}</small>
            </div>
            ))}
        </section>
    )
}

export default Products;