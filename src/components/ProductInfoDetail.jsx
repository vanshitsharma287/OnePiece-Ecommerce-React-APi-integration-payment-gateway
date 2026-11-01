import { useState } from "react";
import "../css/ProductInfoDetail.css";

const product = {
    "id": 10,
    "title": "Gucci Bloom Eau de",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "category": "fragrances",
    "price": 79.99,
    "discountPercentage": 14.39,
    "rating": 2.74,
    "stock": 91,
    "tags": [
        "fragrances",
        "perfumes"
    ],
    "brand": "Gucci",
    "sku": "FRA-GUC-GUC-010",
    "weight": 7,
    "dimensions": {
        "width": 20.92,
        "height": 21.68,
        "depth": 11.2
    },
    "warrantyInformation": "6 months warranty",
    "shippingInformation": "Ships overnight",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 1,
            "comment": "Very dissatisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Cameron Perez",
            "reviewerEmail": "cameron.perez@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Very happy with my purchase!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Daniel Cook",
            "reviewerEmail": "daniel.cook@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Addison Wright",
            "reviewerEmail": "addison.wright@x.dummyjson.com"
        }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 2,
    "meta": {
        "createdAt": "2026-07-19T20:10:42.419Z",
        "updatedAt": "2026-07-27T15:21:17.071Z",
        "barcode": "3170832177880",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
};

const ProductInfoDetail = () => {
    const [currentImg, setCurrentImg] = useState({img: product.thumbnail, index: 0});

    const calculateOriginalPrice = () => {
        const originalPrice = product.price / (1 - (product.discountPercentage / 100));
        return originalPrice.toFixed(2);
    }


    return (
        <section className="product-info-section">
            <div className="product-info-details">
                <div className="img-section">
                    <div className="product-img">
                        {product.images.map((img, index) => (
                          <img className={index == currentImg.index ? "active":""} src={img} alt="product Img" onClick={() => setCurrentImg({"img":img, "index": index})} />
                        )) }
                     
                    </div>

                    <div className="thumbnail-img">
                        <img src={currentImg.img} alt="thumbnail Img" />
                    </div>
                </div>

                <div className="product-details-section">
                    <h2>{product.title}</h2>
                    <small id="brand">{product.brand}</small>
                    <div className="rating-review">
                        <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                        <span>{product.rating}</span>
                        <span>({product.reviews.length} reviews)</span>
                    </div>
                    <div className="price">
                        <strong>${product.price} </strong>
                        <span>${calculateOriginalPrice()}</span>
                        <span id="discount"> {product.discountPercentage.toFixed(0)}% OFF</span>
                    </div>
                    <div className="availability">
                        <span style={{color: product.availabilityStatus == "In Stock" ? "green": "red"}} id="dot">&bull;</span>
                        <span>Availability : <span style={{color: product.availabilityStatus == "In Stock" ? "green": "red"}}>{product.availabilityStatus}</span></span>
                          
                    </div>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <div className="shipping-return-info">
                        <div className="shipping-details">
                            <i class="fa-solid fa-truck-fast"></i>
                            <div className="shipping-info">
                                <strong>Free Shipping</strong>
                                <small>on orders over $50</small>
                            </div>
                        </div>
                        <div className="return-details">
                            <i class="fa-solid fa-arrow-rotate-left"></i>
                            <div className="return-info">
                                <strong>7 Days Return</strong>
                                <small>Easy return policy</small>
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

                    {product.availabilityStatus == "In Stock" ? <div className="btns">
                        <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                        <button id="buyNow-btn"><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>

                    </div> : <button className="notify-me">Notify Me</button>}

                
                </div>
            </div>

        </section>

    )
}
export default ProductInfoDetail;