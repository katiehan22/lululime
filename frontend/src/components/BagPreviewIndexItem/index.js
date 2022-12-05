import "./BagPreviewIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/cart";

const BagPreviewIndexItem = ({cartItem}) => {
  const imgSource = cartItem.productImgUrls[cartItem.primaryImgIdx];
  const dispatch = useDispatch();

  const handleDeleteFromCart = () => {
    dispatch(deleteCartItem(cartItem.id))
  }

  return (
    <>
      <div className="bag-preview-index-item">
        <div className="bag-preview-index-item-img">
          <img src={imgSource} alt="" />
          {/* <img src={testImg} alt="" /> */}
        </div>
        <div className="bag-preview-index-item-right">
          <div className="bag-preview-index-item-header">
            <div className="bag-preview-index-item-header-text">
              {cartItem.productName}
            </div>
            <div className="delete-button-container">
              <button onClick={() => handleDeleteFromCart()}>X</button>
            </div>
          </div>
          <div className="bag-preview-index-item-details">
            <p>{cartItem.colour}</p>
            <p>Size {cartItem.size}</p>
            <div className="bag-preview-index-item-qty-price">
              <div className="bag-preview-index-item-qty">
                <p>Quantity {cartItem.quantity}</p>
              </div>
              <div className="bag-preview-index-item-price">
                <p>${(cartItem.productPrice).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagPreviewIndexItem;