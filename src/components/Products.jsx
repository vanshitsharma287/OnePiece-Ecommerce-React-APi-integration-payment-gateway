import { useNavigate } from "react-router";
import "../css/Products.css";
import { useEffect, useState } from "react";
import { useCurrency } from "../hooks/useCurrency";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [imageIndex, setImageIndex] = useState(0);
    const {calculateAmount} = useCurrency();
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        const favourites = getLocalStorage("favourites");
        if(favourites?.length) {
            if(favourites.includes(product.id)){
                const newFav = favourites.filter(fav => fav != product.id);
                setLocalStorage("favourites", newFav);
            } else{
                favourites.push(product.id);
                setLocalStorage("favourites", favourites);
            } 

        } else{
            setLocalStorage("favourites", [product.id])
        }
    }; 

    const images = product.images || [];
    const selectedImage = images[imageIndex];

    useEffect(() => {
        setImageIndex(0);
        const fav= getLocalStorage("favourites");
        if(fav?.length && fav.includes(product.id)) setIsFavorite(true);
        else setIsFavorite(false);
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
               <i  className={`${isFavorite ? "fa-solid active":"fa-regular"} fa-heart`} onClick={toggleFavorite}></i>
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
                <small>{calculateAmount(product.price)}</small>
            </div>
        </div>
    );
};

const Products = (props) => {
    const { products } = props;
    if(products.length === 0) {
         return <div className="no-products">
                    <h3>No products found</h3>
                </div>
    }

    return (
        <section className="products">
            {products.map(pro => (
                <ProductCard product={pro} />
            ))}
        </section>
    )
}

export default Products;