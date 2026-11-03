import { useNavigate } from "react-router";
import "../css/Products.css";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [imageIndex, setImageIndex] = useState(0);

    const images = product.images || [];
    const selectedImage = images[imageIndex];

    useEffect(() => {
        setImageIndex(0);
    }, [product]);

    const handleImgChange = (action) => {
        if(action == "next") {
            imageIndex == images.length - 1 ? setImageIndex(0) : setImageIndex(imageIndex+1);
        } else {
            imageIndex == 0 ? setImageIndex(images.length-1): setImageIndex(imageIndex-1);
        }
    };

    const handleProductClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card">
            <div className="product-card__img">

                {images.length > 1 && (
                    <i
                        className="fa-solid fa-angle-left"
                        onClick={() => handleImgChange("previous")}
                    />
                )}

                
                    <img
                        src={selectedImage}
                        alt={product.title}
                        onClick={handleProductClick}
                    />
                

                {images.length > 1 && (
                    <i
                        className="fa-solid fa-angle-right"
                        onClick={() => handleImgChange("next")}
                    />
                )}

            </div>

            <div
                className="card-info"
                onClick={handleProductClick}
            >
                <h4>{product.title}</h4>
                <small>$ {product.price}</small>
            </div>
        </div>
    );
};

const Products = (props) => {
    const { products } = props;
    return (
        <section className="products">
            {products.map(pro => (
                <ProductCard product={pro} />
            ))}
        </section>
    )
}

export default Products;