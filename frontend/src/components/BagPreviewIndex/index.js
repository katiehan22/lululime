import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCartItems } from "../../store/cart";
import BagPreviewIndexItem from "../BagPreviewIndexItem";
import "./BagPreviewIndex.css";

const BagPreviewIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

  const calculateNumItems = () => {
    let num = cartItems.reduce((acc, ele) => acc + ele.quantity, 0);
    let itemString = "item";
    if (num > 1) {
      itemString += "s";
    }
    return `(${num} ${itemString})`;
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, ele) => acc + (ele.quantity * ele.productPrice), 0);
  }

  const handleClickToBag = (e) => {
    e.preventDefault();
    history.push('/bag')
  }

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch, cartItems.length])

  return (
    <>
      <div className="bag-preview-sidebar">
        <div className="bag-preview-header">
          <h2>Items In Your Bag</h2>
        </div>
        <div className="bag-preview-index-container">
          {cartItems?.map(cartItem => <BagPreviewIndexItem cartItem={cartItem} key={cartItem.id} />)}
        </div>
        <div className="bag-preview-summary-container">
          <div className="bag-preview-summary-subtotal-container">
            <div className="bag-preview-summary-subtotal-text">
              <p>Subtotal {calculateNumItems()}</p>
            </div>
            <div className="bag-preview-summary-subtotal-amount">
              ${calculateSubtotal()}
            </div>
          </div>
          <div className="bag-preview-summary-shipping-container">
            <div className="bag-preview-summary-shipping-text">
              <p>Shipping</p>
            </div>
            <div className="bag-preview-summary-shipping-amount">
              <p>FREE</p>
            </div>
          </div>
          <div className="view-bag-button-container">
            <button id="view-bag-button" onClick={handleClickToBag}>VIEW BAG & CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagPreviewIndex;