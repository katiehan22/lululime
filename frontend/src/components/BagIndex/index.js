import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCartItem, fetchCartItems } from "../../store/cart";
import BagIndexItem from "../BagIndexItem";
import "./BagIndex.css";
import { useHistory } from "react-router-dom";
import CheckoutConfirmModal from "../CheckoutConfirmModal";


const BagIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);
  let bagIndexContent;

  if(user) {
    bagIndexContent = (
      cartItems?.map(cartItem => <BagIndexItem cartItem={cartItem} key={cartItem.id} />)
    )
  } else {
    bagIndexContent = (
      <div className="bag-index-sign-in-message">Please sign in to view items in your cart.</div>
    )
  }

  useEffect(() => {
    if(user) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, cartItems.length])

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

  const handleCheckout = () => {
    cartItems.map(cartItem => dispatch(deleteCartItem(cartItem.id)));
  }

  return (
    <>
      <div className="bag-index-page">
        <div className="bag-index-page-left">
          <div className="bag-index-header">
            <h2>My Bag&nbsp;</h2>
            <p>{calculateNumItems()}</p>
          </div>
          <div className="bag-index-container">
            {bagIndexContent}
            {/* {cartItems?.map(cartItem => <BagIndexItem cartItem={cartItem} key={cartItem.id} />)} */}
          </div>
        </div>
        <div className="bag-index-page-right">
          <div className="bag-index-summary-header">
            Order Summary
          </div>
          <div className="bag-index-summary-subtotal-container">
            <div className="bag-index-summary-subtotal-text">
              <p>Subtotal</p>
            </div>
            <div className="bag-index-summary-subtotal-amount">
              <p>${calculateSubtotal()}</p>
            </div>
          </div>
          <div className="bag-index-summary-shipping-container">
            <div className="bag-index-summary-shipping-text">
              <p>Shipping</p>
            </div>
            <div className="bag-index-summary-shipping-amount">
              <p>FREE</p>
            </div>
          </div>
          <div className="bag-index-summary-total-container">
            <div className="bag-index-summary-total-text">
              <p>Total</p>
            </div>
            <div className="bag-index-summary-total-amount">
              <p>${calculateSubtotal()}</p>
            </div>
          </div>
          <CheckoutConfirmModal handleCheckout={handleCheckout}/>
        </div>
      </div>
    </>
  )
}

export default BagIndex;
