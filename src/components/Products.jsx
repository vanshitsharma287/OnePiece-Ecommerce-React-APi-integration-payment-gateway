import "../css/Products.css";

const Products = (props) => {
    const {products} = props;
    return(
        <section className="products">
                {products.map(pro => (
                 <div className="product-card">
                <img src={pro.thumbnail} alt="img" />
                 <h4>{pro.title}</h4>
                <small>$ {pro.price}</small>
            </div>
            ))}
        </section>
    )
}

export default Products;