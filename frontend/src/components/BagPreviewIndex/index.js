import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../store/cart";
import BagPreviewIndexItem from "../BagPreviewIndexItem";
import "./BagPreviewIndex.css";

const BagPreviewIndex = () => {
  const dispatch = useDispatch();
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

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
      </div>
    </>
  )
}

export default BagPreviewIndex;