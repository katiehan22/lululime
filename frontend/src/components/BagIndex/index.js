import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCartItem, fetchCartItems } from "../../store/cart";
import BagIndexItem from "../BagIndexItem";
import "./BagIndex.css";
import { useHistory } from "react-router-dom";
import CheckoutConfirmModal from "../CheckoutConfirmModal";


const BagIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user)
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);
  let bagIndexContent;

  const handleCheckout = () => {
    if(cartItems.length === 0 ) {
      setErrors(["Please add items to your cart to checkout"])
    } else {
      cartItems.map(cartItem => dispatch(deleteCartItem(cartItem.id)));
    }
  }

  if(user) {
    bagIndexContent = (
      cartItems?.map(cartItem => <BagIndexItem cartItem={cartItem} key={cartItem.id} />)
    );
  } else {
    bagIndexContent = (
      <div className="bag-index-sign-in-message">Please sign in to view items in your bag.</div>
    );
  }

  useEffect(() => {
    if(user) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, cartItems.length, user])

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
          <CheckoutConfirmModal handleCheckout={handleCheckout} cartItems={cartItems} />
        </div>
      </div>
    </>
  )
}

export default BagIndex;
