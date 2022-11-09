import { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import CheckoutConfirmation from "./CheckoutConfirm";

function CheckoutConfirmModal({handleCheckout, cartItems}) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [errors, setErrors] = useState([]);
  let user = useSelector(state => state.session.user);

  const handleCheckoutClick = () => {
    if(!user) {
      setErrors(["Please sign in to checkout"]);
    }
    else if (cartItems.length === 0) {
      setErrors(["Please add items to your cart to checkout"]);
    } else {
      handleCheckout();
      setShowCheckoutModal(true)
    }
  }

  return (
    <>
      <button id="checkout-button" onClick={() => handleCheckoutClick()}>CHECKOUT</button>
      <ul className="checkout-errors">
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {showCheckoutModal && (
        <Modal onClose={() => setShowCheckoutModal(false)}>
          <CheckoutConfirmation setShowCheckoutModal={setShowCheckoutModal} />
        </Modal>
      )}
    </>
  )
}

export default CheckoutConfirmModal;