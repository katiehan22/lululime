import "./ReviewIndexItem.css";

const ReviewIndexItem = ({review}) => {
  const capitalizeNickname = () => {
    const inputtedNickname = review.nickname;
    return inputtedNickname.charAt(0).toUpperCase() + inputtedNickname.slice(1);
  }

  const formatDate = () => {
    const dateString = review.createdAt;
    const D = new Date(dateString);
    const month = D.getMonth() + 1;
    const day = D.getDate();
    const year = D.getFullYear();
    return month + "/" + day + "/" + year
  }

  return (
    <>
      <div className="review-index-item">
        <div className="review-index-item-nickname-container">
          <div className="nickname-thumbnail">
            {review.nickname.charAt(0).toUpperCase()}
          </div>
          <div className="nickname-text">
            {capitalizeNickname()}
          </div>
          <div className="date-submitted">
            {formatDate()}
          </div>
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