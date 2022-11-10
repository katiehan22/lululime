import "./ProductIndexItem.css";
import testImg from '../../assets/images/product-item-test.png';
import { useHistory } from "react-router-dom";
import { useState } from "react";

// import testImg1 from '../../assets/images/color-test/01_black_v1.png';
// import testImg2 from '../../assets/images/color-test/01_black_v2.png';
// import testImg3 from '../../assets/images/color-test/02_icingblue_v1.png';
// import testImg4 from '../../assets/images/color-test/02_icingblue_v2.png';
// import testImg5 from '../../assets/images/color-test/03_navy_v1.png';
// import testImg6 from '../../assets/images/color-test/03_navy_v2.png';
// import testImg7 from '../../assets/images/color-test/04_white_v1.png';
// import testImg8 from '../../assets/images/color-test/04_white_v2.png';


const ProductIndexItem = ({product}) => {
  // const productImgTest = [testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8];
  const [imgSource, setImgSource] = useState(product.imgUrls[0]);
  
  const COLOURCODES = {
    "Black": "#212121",
    "Icing Blue": "#e2eff8",
    "True Navy": "#00223f",
    "White": "#e9e8eb",
    "Water Drop": "#8695bb",
    "Dark Olive": "#342b22",
    "Green Foliage": "#8ca545",
    "Dark Red": "#c2333f",
    "Electric Turquoise": "#84dadd",
    "Wasabi": "#d1d582",
    "Pomegranate": "#890138",
    "White Opal": "#eadfce",
    "Faint Lavender": "#d2c3cd",
    "Smoked Spruce": "#414941",
    "Heathered Core Ultra Light Grey": "#eaeae8",
    "Carob Brown": "#959271",
    "Poolside": "#0069bf",
    "Roasted Brown": "#855036",
    "Graphite Grey": "#474447",
    "Red Merlot": "#64262c",
    "Natural Ivory": "#e9e3d9",
    "Brier Rose": "#e2867f",
    "Burnt Caramel": "#ad7550"
  }

  const history = useHistory();

  const handleClickToDetailsPage = (e) => {
    e.preventDefault();
    history.push(`/productdetail/${product.id}`)
  }

  return (
    <>
      <div className="product-index-item-container" >
        <div className="product-index-img" 
          onMouseEnter={() => setImgSource(product.imgUrls[1])}
          onMouseLeave={() => setImgSource(product.imgUrls[0])}
          onClick={handleClickToDetailsPage}>
          {/* <img src={testImg} alt=""/> */}
          <img src={imgSource} alt="" />
        </div>

        <div className="product-index-colours-container">
          <div className="product-index-colour-display" style={{ backgroundColor: COLOURCODES[product.colours[0]] }}></div>
          <div className="product-index-colour-display" style={{ backgroundColor: COLOURCODES[product.colours[1]] }}></div>
          <div className="product-index-colour-display" style={{ backgroundColor: COLOURCODES[product.colours[2]] }}></div>
          <div className="product-index-colour-display" style={{ backgroundColor: COLOURCODES[product.colours[3]] }}></div>
        </div>

        <div className="product-index-lower-info" onClick={handleClickToDetailsPage}>
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