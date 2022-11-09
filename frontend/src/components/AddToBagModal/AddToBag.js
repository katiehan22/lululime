import { useHistory } from "react-router-dom";
import "./AddToBag.css";

const AddToBag = ({ setShowAddBagModal, product, products }) => {
  const history = useHistory();

  const handleViewBagClick = () => {
    setShowAddBagModal(false);
    history.push('/bag');
  }

  return (
    <>
      <div className="add-to-bag-confirmation-container">
        <div className="add-to-bag-confirmation-header">
          <div className="add-to-bag-confirmation-header-text">
            We Love That, Too!
          </div>
          <div>
            <button id="close-add-to-bag-modal-button" onClick={() => setShowAddBagModal(false)}>X</button>
          </div>
        </div>
        <div className="view-bag-continue-shopping-button-container">
          <button id="add-to-bag-modal-view-bag-button" onClick={() => handleViewBagClick()}>VIEW BAG AND CHECKOUT</button>
          <button id="add-to-bag-continue-shopping-button" onClick={() => setShowAddBagModal(false)}>Continue Shopping</button>
        </div>
      </div>
    </>
  )
}

export default AddToBag;