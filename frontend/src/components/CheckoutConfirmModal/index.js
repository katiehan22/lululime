import { useState } from "react";
import { Modal } from "../../context/Modal";
import CheckoutConfirmation from "./CheckoutConfirm";

function CheckoutConfirmModal({handleCheckout}) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleCheckoutClick = () => {
    handleCheckout();
    setShowCheckoutModal(true)
  }

  return (
    <>
      <button id="checkout-button" onClick={() => handleCheckoutClick()}>CHECKOUT</button>
      {showCheckoutModal && (
        <Modal onClose={() => setShowCheckoutModal(false)}>
          <CheckoutConfirmation setShowCheckoutModal={setShowCheckoutModal} />
        </Modal>
      )}
    </>
  )
}

export default CheckoutConfirmModal;