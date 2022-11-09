import ReviewForm from "./ReviewForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";

function ReviewFormModal({productId}) {
  const [showReveiwModal, setShowReviewModal] = useState(false);
  const [errors, setErrors] = useState([]);
  let user = useSelector(state => state.session.user);

  const handleReviewModalClick = () => {
    if(user) {
      setShowReviewModal(true);
    } else {
      setErrors(["Please sign in to write a review."]);
    }
  }

  return (
    <>
      <button id="create-revew-button" onClick={() => handleReviewModalClick()}>WRITE A REVIEW</button>
      <ul className="review-modal-errors">
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {showReveiwModal && (
        <Modal onClose={() => setShowReviewModal(false)}>
          <ReviewForm productId={productId} setShowReviewModal={setShowReviewModal} />
        </Modal>
      )}
    </>
  )
}

export default ReviewFormModal;