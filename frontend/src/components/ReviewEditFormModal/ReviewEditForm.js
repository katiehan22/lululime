import "./ReviewEditForm.css";
import testImg from '../../assets/images/product-item-test.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";

const ReviewEditForm = ({ review, setShowEditReviewModal }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState([false, false, false, false, false]);
  const [ratingStyleClass, setRatingStyleClass] = useState(["star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked"]);
  const [ratingSelection, setRatingSelection] = useState(review.rating);
  const [nickname, setNickname] = useState(review.nickname);
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user)

  const setInitialStarStyles = () => {
    let ratingStyleClassCopy = ["star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked"];
    for(let i = 0; i < review.rating; i++) {
      ratingStyleClassCopy[i] = "star-checked";
    }

    setRatingStyleClass(ratingStyleClassCopy);
  }

  const handleRating = (index) => {
    const ratingStyleClassCopy = ["star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked", "star-unchecked"];

    for (let i = 0; i <= index; i++) {
      ratingStyleClassCopy[i] = "star-checked";
    }

    setRatingStyleClass(ratingStyleClassCopy);
    setRatingSelection(index + 1);
  }

  const handleSubmitReview = () => {
    setErrors([]);
    const newReview = {
        ...review,
        userId: user.id,
        productId: review.productId,
        rating: ratingSelection,
        nickname: nickname,
        title: title,
        body: body
    }

    dispatch(updateReview(newReview))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }

        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          setErrors([data]);
        } else {
          setErrors([res.statusText]);
        }
      });
    // setShowEditReviewModal(false);

    // if(errors.length === 0) {
    //   setShowReviewModal(false);
    // }
  }

  useEffect(() => {
    setInitialStarStyles();
  }, [dispatch]);

  return (
    <>
      <div className="create-review-form-container">
        <div className="review-img">
          <img src={testImg} alt="" />
        </div>
        <div className="create-review-form-right">
          <div className="create-review-header">
            <div className="create-review-product-name">
              Edit your review for {review.productName}
            </div>
            <div>
              <button id="close-review-modal-button" onClick={() => setShowEditReviewModal(false)}>X</button>
            </div>
          </div>
          <div className="review-inputs-container">
            <div className="rating-buttons-container">
              <div className="ratings-header">Your overall rating*</div>
              <button
                className={ratingStyleClass[0]}
                onClick={() => handleRating(0)} >
                <i class="fa-solid fa-star"></i>
              </button>
              <button
                className={ratingStyleClass[1]}
                onClick={() => handleRating(1)}>
                <i class="fa-solid fa-star"></i>
              </button>
              <button
                className={ratingStyleClass[2]}
                onClick={() => handleRating(2)}>
                <i class="fa-solid fa-star"></i>
              </button>
              <button
                className={ratingStyleClass[3]}
                onClick={() => handleRating(3)}>
                <i class="fa-solid fa-star"></i>
              </button>
              <button
                className={ratingStyleClass[4]}
                onClick={() => handleRating(4)}>
                <i class="fa-solid fa-star"></i>
              </button>
            </div>
            <form className="review-form">
              <div className="nickname-container">
                <div className="nickname-header-container">
                  <p className="review-header">Nickname* &nbsp;</p>
                  <p className="review-subheader">(Name displayed)</p>
                </div>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required placeholder="Example: Jackie27" />
              </div>
              <div className="review-title-container">
                <div className="review-title-header-container">
                  <p className="review-title-header">Review Title* &nbsp;</p>
                </div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Example: Super comfortable!" />
              </div>
              <div className="review-body-container">
                <div className="review-body-header-container">
                  <p className="review-body-header">Review*</p>
                </div>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required placeholder="Tell others about your gear. What did you love? How's the fit? What can improve?" />
              </div>
            </form>
            <div className="create-review-button-container">
              <button onClick={() => handleSubmitReview()} className="submit-review-button">SUBMIT REVIEW</button>
            </div>
            <ul className="review-form-errors">
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewEditForm;