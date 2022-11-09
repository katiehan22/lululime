import "./ReviewIndexItem.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";
import ReviewEditFormModal from "../ReviewEditFormModal";

const ReviewIndexItem = ({review}) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
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

  const fillStarIcons = () => {
    if (review.rating === 1) {
      return (
        <>
          <i class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
        </>
      )
    } else if (review.rating === 2) {
      return (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
        </>
      )
    } else if (review.rating === 3) {
      return (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
        </>
      )
    } else if (review.rating === 4) {
      return (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i id="star-icon-gray" class="fa-solid fa-star"></i>
        </>
      )
    } else {
      return (
        <>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </>
      )
    }
  }

  const handleDeleteReview = () => {
    // console.log(review.userId);
    // console.log(user.id);
    if (review.userId === user.id) {
      dispatch(deleteReview(review.id));
    } else {
      setErrors(["You can only delete your own reviews."])
    }
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
          {fillStarIcons()}
        </div>
        <div className="review-index-item-title-container">
          {review.title}
        </div>
        <div className="review-index-item-body-container">
          {review.body}
        </div>
        <div className="review-item-edit-remove-container">
          {/* <div className="review-item-edit-button">Edit</div> */}
          <ReviewEditFormModal review={review} setErrors={setErrors} />
          <div className="review-item-delete-button" onClick={() => handleDeleteReview()}>Delete</div>
        </div>
        <ul className="review-delete-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      </div>
    </>
  )
}

export default ReviewIndexItem;