import { useHistory } from "react-router-dom";
import "./CheckoutConfirmation.css";

const CheckoutConfirmation = ({ setShowCheckoutModal }) => {
  const history = useHistory();

  const handleClick = () => {
    setShowCheckoutModal(false);
    history.push("/");
  }

  return (
    <>
      <div className="checkout-confirmation-container">
        <div className="checkout-confirmation-header">
          <h2>Thanks for your order!</h2>
        </div>
        <div className="continue-shopping-button-container">
          <button id="continue-shopping-button" onClick={() => handleClick()}>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckoutConfirmation;