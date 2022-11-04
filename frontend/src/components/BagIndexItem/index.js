import "./BagIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/cart";

const BagIndexItem = ({cartItem}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bag-index-item">
        <div className="bag-index-item-left">
          <img src={testImg} alt="" />
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
                <p>${cartItem.productPrice}</p>
              </div>
              <div className="bag-item-qty">
                <p>Quantity</p>
                <p>{cartItem.quantity}</p>
              </div>
              <div className="bag-item-total-price">
                <p>Total Price</p>
                <p>${cartItem.productPrice * cartItem.quantity}</p>
              </div>
            </div>
          </div>
          <div className="bag-item-edit-remove-container">
            <div className="bag-item-edit-button">Edit</div>
            <div className="bag-item-remove-button" onClick={() => dispatch(deleteCartItem(cartItem.id)) }>Remove</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagIndexItem;