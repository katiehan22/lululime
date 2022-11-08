import ReviewForm from "./ReviewForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";

function ReviewFormModal({productId}) {
  const [showReveiwModal, setShowReviewModal] = useState(false);

  return (
    <>
      <button id="create-revew-button" onClick={() => setShowReviewModal(true)}>WRITE A REVIEW</button>
      {showReveiwModal && (
        <Modal onClose={() => setShowReviewModal(false)}>
          <ReviewForm productId={productId} setShowReviewModal={setShowReviewModal} />
        </Modal>
      )}
    </>
  )
}

export default ReviewFormModal;