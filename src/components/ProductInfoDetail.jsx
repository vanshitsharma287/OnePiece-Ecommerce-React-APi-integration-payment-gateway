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

      const calculateOriginalPrice = ()=> {
            const originalPrice = product.price / (1 - (product.discountPercentage / 100));
            return originalPrice.toFixed(2);
      }

    return(
          <section className="product-info-detail">
            <div className="product-image-section">
                  <div className="product-img">
                        {/* {product.images.map() } */}
                        <img src={product.images[0]} alt="product Img" />
                        <img src={product.images[1]} alt="product Img" />
                        <img src={product.images[2]} alt="product Img" />
                  </div>
                  <div className="thumbnail-img">
                        <img src={product.thumbnail} alt="thumbnail Img" />
                  </div>
            </div>
            <div className="product-details-section">
                  <h2>{product.title}</h2>
                  <small>{product.brand}</small>
                  <div className="rating-review">
                        <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                        <span>{product.rating}</span>
                        <span>({product.reviews.length} reviews)</span>
                  </div>
                  <div className="price">
                        <strong>${product.price} </strong>
                        <span>${calculateOriginalPrice()}</span>
                        <span> {product.discountPercentage}% OFF</span>
                  </div>
            </div>

          </section>

    )
 }
 export default ProductInfoDetail;