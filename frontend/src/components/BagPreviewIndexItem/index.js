import "./BagPreviewIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';


const BagPreviewIndexItem = ({cartItem}) => {
  return (
    <>
      <div className="bag-preview-index-item">
        <div className="bag-preview-index-item-img">
          <img src={testImg} alt=""/>
        </div>
        <div className="bag-preview-index-item-right">
          <div className="bag-preview-index-item-header">
            <div className="bag-preview-index-item-header-text">
              {cartItem.productName}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BagPreviewIndexItem;