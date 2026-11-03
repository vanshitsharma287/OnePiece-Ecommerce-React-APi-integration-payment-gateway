import { useNavigate } from "react-router";
import "../css/Products.css";

const Products = (props) => {
    const { products } = props;
    const navigate = useNavigate();
    return (
        <section className="products">
            {products.map(pro => (
                <div className="product-card">
                    <div className="product-card__img">
                        <i class="fa-solid fa-angle-left"></i>
                        <img src={pro.thumbnail} onClick={() => navigate(`/product/${pro.id}`)} alt="img" />
                        <i class="fa-solid fa-angle-right"></i>
                    </ div>
                    <div onClick={() => navigate(`/product/${pro.id}`)} className="card-info">
                        <h4>{pro.title}</h4>
                        <small>$ {pro.price}</small>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Products;