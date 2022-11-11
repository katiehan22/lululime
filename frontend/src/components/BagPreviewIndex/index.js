import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCartItems } from "../../store/cart";
import BagPreviewIndexItem from "../BagPreviewIndexItem";
import "./BagPreviewIndex.css";

const BagPreviewIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);
  let bagPreviewIndexContent;

  if (user) {
    bagPreviewIndexContent = (
      cartItems?.map(cartItem => <BagPreviewIndexItem cartItem={cartItem} key={cartItem.id} />)
    )
  } else {
    bagPreviewIndexContent = (
      <div className="bag-preview-sign-in-message">Please sign in to view items in your bag.</div>
    )
  }

  const calculateNumItems = () => {
    let num = cartItems.reduce((acc, ele) => acc + ele.quantity, 0);
    let itemString = "item";
    if (num > 1) {
      itemString += "s";
    }
    if(user) {
      return `(${num} ${itemString})`;
    } else {
      return "(0 items)";
    }
  }

  const calculateSubtotal = () => {
    if(user) {
      return cartItems.reduce((acc, ele) => acc + (ele.quantity * ele.productPrice), 0);
    } else {
      return 0;
    }
  }

  const handleClickToBag = (e) => {
    e.preventDefault();
    history.push('/bag')
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, cartItems.length, user])

  return (
    <>
      <div className="bag-preview-sidebar">
        <div className="bag-preview-header">
          <h2>Items In Your Bag</h2>
        </div>
        <div className="bag-preview-index-container">
          {bagPreviewIndexContent}
        </div>
        <div className="bag-preview-summary-container">
          <div className="bag-preview-summary-subtotal-container">
            <div className="bag-preview-summary-subtotal-text">
              <p>Subtotal {calculateNumItems()}</p>
            </div>
            <div className="bag-preview-summary-subtotal-amount">
              ${calculateSubtotal().toFixed(2)}
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