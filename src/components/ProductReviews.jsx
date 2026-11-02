import "../css/ProductReviews.css";
const ProductReviews = ({ product }) => {
    const { reviews } = product;
    const totalRating = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0);
    const averageRating = (totalRating / reviews.length).toFixed(1);

    const renderRatingStars = () => {
        const totalStars = 5;
        const fullStars = Math.floor(averageRating);
        const hasHalfStar = averageRating % 1 >= 0.5;

        const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];

        // full stars
        for (let i = 1; i <= fullStars; i++) {
            stars.push(<i className="fa fa-star"></i>)
        }

        //half star
        if (hasHalfStar) {
            stars.push(<i className="fa-solid fa-star-half-stroke"></i>)
        }

        //empty stars
        for (let i = 1; i <= emptyStars; i++) {
            stars.push(<i className="fa-regular fa-star"></i>)
        }

        return <span>
            {stars}
        </span>
    }

    return (
        <div className="product-reviews-section">
            <div className="reviews-heading">
                <h3>Customer Reviews</h3>
                <button><i class="fa-solid fa-pencil"></i> Write a Review</button>
            </div>
            <div className="review-section">
                <h1>{averageRating}</h1>
                {renderRatingStars()}
                <span>{reviews.length} reviews</span>
            </div>

        </div>

    )
}
export default ProductReviews;