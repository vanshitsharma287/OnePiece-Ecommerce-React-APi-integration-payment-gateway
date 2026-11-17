import { useEffect, useState } from "react";
import "../css/ProductInfoDetail.css";
import { useNavigate, useParams } from "react-router";
import ProductSpecs from "./ProductSpecs";
import ProductReviews from "./ProductReviews";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import toast from "react-hot-toast";
import Loader from "./common/Loader";
import { useCart } from "../hooks/useCart";
import { useCurrency } from "../hooks/useCurrency";
import { SHIPPING_CHARGE } from "../constants/cartConstants";
const MENU_ITEMS=["Specification", `Reviews`];

const ProductInfoDetail = ({ setBreadCrumbItems }) => {
    const {setCartCount} = useCart();
    const {calculateAmount} = useCurrency();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const {id} = useParams();
    const navigate= useNavigate();


    const [currentImg, setCurrentImg] = useState({ img: null, index: 0 });

    const calculateOriginalPrice = () => {
        const originalPrice = product.price / (1 - (product.discountPercentage / 100));
        return originalPrice.toFixed(2);
    }

    const getProduct = async () => {
        try {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const jsonResult = await result.json()
            setProduct(jsonResult);
            setBreadCrumbItems([{label: jsonResult.title, to: `/product/${jsonResult.id}`, active:true}]);
            setCurrentImg({img: jsonResult.thumbnail, index:0}); 
            setLoading(false);
        }
        catch (error) {
            toast.error("Error while fetching product");
        }
        
    }

    const renderRatingStars = () => {
        const totalStars = 5;
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;

        const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];

        // full stars
        for(let i = 1; i <= fullStars; i++) {
            stars.push(<i className="fa fa-star"></i>)
        } 

        //half star
        if(hasHalfStar) {
            stars.push(<i className="fa-solid fa-star-half-stroke"></i>)
        }

        //empty stars
        for(let i=1;i<= emptyStars;i++) {
            stars.push(<i className="fa-regular fa-star"></i>)
        }

       return <span>
        {stars}
       </span>
    }

    useEffect(() => {
        getProduct();
    },[])

    const handleCartProduct = () => {
        const cart = getLocalStorage("cart");
        if(cart?.length) {
          const findProduct = cart.findIndex(pro => pro.id == product.id);
          if(findProduct != -1) {
            if(cart[findProduct].count == product.stock) {
              toast.error(`You can only add ${product.stock} items`);
              return;
            }
            cart[findProduct].count++;
            setLocalStorage("cart", cart);
          } else {
            cart.push({id: product.id, count:1});
            setLocalStorage("cart", cart);
          }
        } else {
            setLocalStorage("cart", [{id: product.id, count:1}]);
        }
        setCartCount(getLocalStorage("cart")?.length || 0);
        toast.success("Item added to cart", {duration: "100"});
    }

    const handleBuyNow = (id) => {
      navigate(`/checkout/${id}`);
    }


    return (
        <section className="product-info-section">
            {loading ? <Loader /> : <>
            <div className="product-info-details">
                <div className="img-section">
                    <div className="product-img">
                        {product?.images?.map((img, index) => (
                            <img className={index == currentImg.index ? "active" : ""} src={img} alt="product Img" onClick={() => setCurrentImg({ "img": img, "index": index })} />
                        ))}

                    </div>

                    <div className="thumbnail-img">
                        <img src={currentImg.img} alt="thumbnail Img" />
                    </div>
                </div>

                <div className="product-details-section">
                    <h2>{product.title}</h2>
                    <small id="brand">{product.brand}</small>
                    <div className="rating-review">
                        {renderRatingStars()}
                        <span>{product.rating}</span>
                        <span>({product?.reviews?.length} reviews)</span>
                    </div>
                    <div className="price">
                        <strong>{calculateAmount(product.price)}</strong>
                        <span>{calculateAmount(calculateOriginalPrice())}</span>
                        <span id="discount"> {product.discountPercentage.toFixed(0)}% OFF</span>
                    </div>
                    <div className="shipping-time">{product.shippingInformation}</div>
                    <div className="availability">
                        <span style={{ color: product.availabilityStatus == "In Stock" ? "green" : "red" }} id="dot">&bull;</span>
                        <span>Availability : <span style={{ color: product.availabilityStatus == "In Stock" ? "green" : "red" }}>{product.availabilityStatus}</span></span>

                    </div>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <div className="shipping-return-info">
                        <div className="shipping-details">
                            <i class="fa-solid fa-truck-fast"></i>
                            <div className="shipping-info">
                                <strong>Free Shipping</strong>
                                <small>{`on orders over ${calculateAmount(SHIPPING_CHARGE)}`}</small>
                            </div>
                        </div>
                        <div className="return-details">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                            <div className="return-info">
                                <strong>{product.returnPolicy}</strong>
                                <small>return policy</small>
                            </div>
                        </div>
                        <div className="payment-details">
                            <i class="fa-solid fa-shield"></i>
                            <div className="payment-info">
                                <strong>Secure Payments</strong>
                                <small>100% secure</small>
                            </div>
                        </div>
                    </div>

                    {product.availabilityStatus != "Out of Stock" ? <div className="btns">
                        <button onClick={() => handleCartProduct()}><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                        <button id="buyNow-btn" onClick={() => handleBuyNow(product.id)}><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>

                    </div> : <button className="notify-me">Notify Me</button>}


                </div>
            </div>

            <div className="product-meta-info">
                <div className="menu-tabs">
                    {MENU_ITEMS.map((item, index)=>(
                      <button onClick={() => setActiveTab(index)}  className={index == activeTab ? "active" : ""}>{item == "Reviews" ? `${item} (${product.reviews.length})` : item}
                      </button>
                    ))}
                    
                </div>
                    <hr/>

                  {activeTab == 0  && <ProductSpecs product={product} />}
                  {activeTab == 1 && <ProductReviews product={product} />}

            </div>
            
            
            </>
            }
            

        </section>

    )
}
export default ProductInfoDetail;