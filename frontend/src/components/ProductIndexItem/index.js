import "./ProductIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useHistory } from "react-router-dom";

const ProductIndexItem = ({product}) => {
  const history = useHistory();

  const handleClickToDetailsPage = (e) => {
    e.preventDefault();
    history.push(`/productdetail/${product.id}`)
  }

  return (
    <>
      <div className="product-index-item-container" onClick={handleClickToDetailsPage}>
        <div className="product-index-img">
          <img src={testImg} alt=""/>
        </div>

        <div className="product-index-colours">
          {product.colours}
        </div>

        <div className="product-index-lower-info">
          <div className="product-index-name">
            {product.name}
          </div>
          <div className="product-index-price">
            ${product.price}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductIndexItem;