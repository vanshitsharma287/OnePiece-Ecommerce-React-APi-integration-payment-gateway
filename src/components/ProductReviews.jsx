import "../css/ProductReviews.css";
import { formatTimeAgo } from "../utils/dateTime";
const ProductReviews = ({ product }) => {
    const { reviews } = product;
    const totalRating = reviews.reduce((sum, review) => {
        return sum + review.rating;
    }, 0);
    const averageRating = (totalRating / reviews.length).toFixed(1);

    const renderRatingStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

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

    const calculateAvgPercentage = () => {
        const reviewsProgress = [];

        for(let i = 5; i > 0; i--) {
            const countRating = reviews.reduce((count, review) => {
               return  review.rating == i ? ++count : count;
            }, 0);

            const ratingPer = ((countRating/reviews.length)*100).toFixed(0);

            reviewsProgress.push(
                <div key={i} className="rating">
                    <span>
                        {i} <i className="fa-solid fa-star"></i>
                    </span>

                    <div className="rating-progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${ratingPer}%` }}
                        ></div>
                    </div>

                    <strong>{ratingPer}%</strong>
                </div>
            )
        }
        return <>{reviewsProgress}</>

    }

    return (
        <div className="product-reviews-section">
            <div className="reviews-heading">
                <h3>Customer Reviews</h3>
                <button><i class="fa-solid fa-pencil"></i> Write a Review</button>
            </div>
            <div className="review-section">
                <div className="avg-reviews">
                    <h1>{averageRating}</h1>
                    {renderRatingStars(averageRating)}
                    <span>{reviews.length} reviews</span>
                </div>

                <div className="rating-graph">
                  {calculateAvgPercentage()}
                </div>
            </div>

            <div className="customer-review-card">
                {reviews.map(review => (
                    <div className="review-card">
                        <i class="fa-solid fa-circle-user"></i>
                        <div className="reviewer-meta-data">
                            <h4>{review.reviewerName}</h4>
                            <small>{formatTimeAgo(review.date)}</small>
                            {renderRatingStars(review.rating)}
                            <p>{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
export default ProductReviews;