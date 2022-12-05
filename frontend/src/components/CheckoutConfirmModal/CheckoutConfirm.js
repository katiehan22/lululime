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
      <div className="close-checkout-modal-button">
        <button onClick={() => setShowCheckoutModal(false)}>X</button>
      </div>
      <div className="checkout-confirmation-container">
        <div className="checkout-confirmation-header">
          <h2>Thanks for checking out my site!</h2>
          <h3>Check out my other work:</h3>
        </div>
        <div className="icon-container">
          <a href="https://github.com/katiehan22/lululime" target="_blank"><i id="github-icon" class="fa-brands fa-square-github"></i></a>
          <a href="https://www.linkedin.com/in/katiehan22/" target="_blank"><i id="linkedin-icon" class="fa-brands fa-linkedin"></i></a>
        </div>
        {/* <div className="continue-shopping-button-container">
          <button id="continue-shopping-button" onClick={() => handleClick()}>
            Continue Shopping
          </button>
        </div> */}
      </div>
    </>
  )
}

export default CheckoutConfirmation;