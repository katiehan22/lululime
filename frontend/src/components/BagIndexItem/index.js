import "./BagIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/cart";
import { useHistory } from "react-router-dom";
import { updateCartItem } from '../../store/cart';
import EditCartFormModal from "../EditCartFormModal";
import { useState } from "react";

const BagIndexItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imgSource = cartItem.productImgUrls[cartItem.primaryImgIdx];

  const [primaryImgIdx, setPrimaryImgIdx] = useState(cartItem.primaryImgIdx);

  const handleQtyChange = () => {
    return (e) => {
      const updatedItem = Object.assign({}, cartItem, {["quantity"]: e.target.value})
      dispatch(updateCartItem(updatedItem));
    }
  }

  return (
    <>
      <div className="bag-index-item">
        <div className="bag-index-item-left">
          <img src={imgSource} alt="" />
        </div>
        <div className="bag-index-item-right">
          <div className="bag-item-name">
            <p>{cartItem.productName}</p>
          </div>
          <div className="bag-item-colour">
            <p>{cartItem.colour}</p>
          </div>
          <div className="bag-item-middle-details-container">
            <div className="bag-item-size-container">
              <p>Size {cartItem.size}</p>
            </div>
            <div className="bag-item-price-qty-container">
              <div className="bag-item-single-price">
                <p>Item Price</p>
                <p className="bag-item-price-qty-value">${cartItem.productPrice}</p>
              </div>
              <div className="bag-item-qty">
                <p>Quantity</p>
                <form className="bag-item-price-qty-value">
                  <select name="quantity" value={cartItem.quantity} onChange={handleQtyChange()} id="qty-dropdown">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </form>
              </div>
              <div className="bag-item-total-price">
                <p>Total Price</p>
                <p className="bag-item-price-qty-value">${cartItem.productPrice * cartItem.quantity}</p>
              </div>
            </div>
          </div>
          <div className="bag-item-edit-remove-container">
            <EditCartFormModal cartItemId={cartItem.id} />
            <div className="bag-item-remove-button" onClick={() => dispatch(deleteCartItem(cartItem.id)) }>Remove</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagIndexItem;