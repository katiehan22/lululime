import { useHistory } from "react-router-dom";
import "./CheckoutConfirmation.css";

const CheckoutConfirmation = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  }

  return (
    <>
      <div className="checkout-confirmation-container">
        <div className="checkout-confirmation-header">
          <h2>Thanks for your order!</h2>
        </div>
        <div className="continue-shopping-button-container">
          <button id="continue-shopping-button" onClick={() => redirectToHome()}>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckoutConfirmation;