import ReviewEditForm from "./ReviewEditForm";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";

function ReviewEditFormModal({ review, setErrors }) {
  const [showEditReveiwModal, setShowEditReviewModal] = useState(false);
  let user = useSelector(state => state.session.user);

  const handleReviewEditClick = () => {
    if(!user) {
      setErrors(["Please sign in to modify reviews."]);
    } else if (review.userId === user.id) {
      setShowEditReviewModal(true);
    } else {
      setErrors(["You can only edit your own reviews."]);
    }
  }

  return (
    <>
      <div className="review-item-edit-button" onClick={() => handleReviewEditClick()}>Edit</div>
      {showEditReveiwModal && (
        <Modal onClose={() => setShowEditReviewModal(false)}>
          <ReviewEditForm review={review} setShowEditReviewModal={setShowEditReviewModal} />
        </Modal>
      )}
    </>
  )
}

export default ReviewEditFormModal;