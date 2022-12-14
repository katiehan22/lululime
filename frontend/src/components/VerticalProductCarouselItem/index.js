import { useHistory } from "react-router-dom";
import "./VerticalProductCarouselItem.css";
import testImg from '../../assets/images/product-item-test.png';


const VerticalProductCarouselItem = ({product}) => {

  const history = useHistory();

  const handleClickToDetails = (e) => {
    e.preventDefault();
    history.push(`/productdetail/${product.id}`)
  }
  return (
    <>
      <div className="vert-carousel-item-container">
        <div className="vert-carousel-item-img" onClick={handleClickToDetails}>
          <img src={product.imgUrls[0]} alt="" />
          {/* <img src={testImg} alt="" /> */}
        </div>
        <div className="vert-carousel-item-name">
          {product.name}
        </div>
      </div>
    </>
  )
}

export default VerticalProductCarouselItem;