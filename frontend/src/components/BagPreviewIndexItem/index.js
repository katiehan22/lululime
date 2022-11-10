import "./BagPreviewIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../store/cart";

import testImg1 from '../../assets/images/color-test/01_black_v1.png';
import testImg2 from '../../assets/images/color-test/01_black_v2.png';
import testImg3 from '../../assets/images/color-test/02_icingblue_v1.png';
import testImg4 from '../../assets/images/color-test/02_icingblue_v2.png';
import testImg5 from '../../assets/images/color-test/03_navy_v1.png';
import testImg6 from '../../assets/images/color-test/03_navy_v2.png';
import testImg7 from '../../assets/images/color-test/04_white_v1.png';
import testImg8 from '../../assets/images/color-test/04_white_v2.png';


const BagPreviewIndexItem = ({cartItem}) => {
  const productImgTest = [testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8];

  const dispatch = useDispatch();

  const handleDeleteFromCart = () => {
    dispatch(deleteCartItem(cartItem.id))
  }

  return (
    <>
      <div className="bag-preview-index-item">
        <div className="bag-preview-index-item-img">
          <img src={productImgTest[cartItem.primaryImgIdx]} alt=""/>
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
                <p>${cartItem.productPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagPreviewIndexItem;