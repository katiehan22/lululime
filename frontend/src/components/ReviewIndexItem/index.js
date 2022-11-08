import "./ReviewIndexItem.css";

const ReviewIndexItem = ({review}) => {
  return (
    <>
      <div className="review-index-item">
        <div className="review-index-item-nickname-container">
          {review.nickname}
        </div>
        <div className="review-index-item-rating-container">
          {review.rating}
        </div>
        <div className="review-index-item-title-container">
          {review.title}
        </div>
        <div className="review-index-item-body-container">
          {review.body}
        </div>
      </div>
    </>
  )
}

export default ReviewIndexItem;