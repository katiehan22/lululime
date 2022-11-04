import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartItems } from "../../store/cart";
import BagIndexItem from "../BagIndexItem";
import "./BagIndex.css";

const BagIndex = () => {
  const dispatch = useDispatch();
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

  const calculateNumItems = () => {
    let num = cartItems.reduce((acc, ele) => acc + ele.quantity, 0);
    let itemString = "item";
    if (num > 1) {
      itemString += "s";
    }
    return `(${num} ${itemString})`;
  }

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch, cartItems.length])

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

        </div>
      </div>
    </>
  )
}

export default BagIndex;
