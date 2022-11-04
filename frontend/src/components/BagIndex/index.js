import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartItems } from "../../store/cart";
import BagIndexItem from "../BagIndexItem";
import "./BagIndex.css";

const BagIndex = () => {
  const dispatch = useDispatch();
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

  useEffect(() => {
    dispatch(fetchCartItems());
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

  return (
    <>
      <div className="bag-index-page">
        <div className="bag-index-page-left">
          <div className="bag-index-header">
            <h2>My Bag&nbsp;</h2>
            <p>{calculateNumItems()}</p>
          </div>
          <div className="bag-index-container">
            {cartItems?.map(cartItem => <BagIndexItem cartItem={cartItem} key={cartItem.id} />)}
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
          <button id="checkout-button">CHECKOUT</button>
        </div>
      </div>
    </>
  )
}

export default BagIndex;
