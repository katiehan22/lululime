import "./SplashPage.css";
import splashImg from "../../assets/images/splash.png";
import featureImg1 from "../../assets/images/splashfeature1.png"
import featureImg2 from "../../assets/images/splashfeature2.png"
import featureImg3 from "../../assets/images/splashfeature3.png"
import featureImg4 from "../../assets/images/splashfeature4.png"
import { NavLink, useHistory } from 'react-router-dom';
import SplashMembership from "../SplashMembership";
import ProductCarousel from "../ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductAndRelatedProducts, removeProducts } from "../../store/products";

const SplashPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  const handleFeature1 = (e) => {
    e.preventDefault();
    history.push('/products/womens/hoodies');
  }

  const handleFeature2 = (e) => {
    e.preventDefault();
    history.push('/products/womens/joggers');
  }

  const handleFeature3 = (e) => {
    e.preventDefault();
    history.push('/products/mens');
  }

  const handleFeature4 = (e) => {
    e.preventDefault();
    history.push('/products/womens');
  }

  useEffect(() => {
    dispatch(fetchProductAndRelatedProducts(18));
    return () => dispatch(removeProducts());
  }, [dispatch])

  if(products.length < 5) {
    return null;
  }

  return (
    <>
      <div className="splash-page">
        <SplashMembership />
        <div className="splash-menu">
          <div className="splash-img">
            <img src={splashImg} alt=""/>
          </div>
          <div className="splash-links">
            <h2 id="splash-header">lululime</h2>
            <ul>
              <li className="splash-li"><NavLink to="/products/womens">All Women's</NavLink></li>
              <li className="splash-li"><NavLink to="/products/mens">All Men's</NavLink></li>
              <li className="splash-li"><NavLink to="/products/accessories">All Accessories</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="splash-feature-container-1">
          <div className="splash-feature-1">
            <div className="splash-feature-1-img">
              <img src={featureImg1} alt=""/>
            </div>
            <div className="splash-feature-1-header">
              <h2>Beakout performer: fleece.</h2>
            </div>
            <div className="splash-feature-1-subheader">
              <p>Just when you thought the Scuba Oversized Funnel-Neck couldn’t get any better—may we introduce: the new, longer-length fleece edition.</p>
            </div>
            <button className="splash-feature-1-button" onClick={handleFeature1}>SHOP HOODIES & SWEATSHIRTS</button>
          </div>
          <div className="splash-feature-2">
            <div className="splash-feature-2-img">
              <img src={featureImg2} alt=""/>
            </div>
            <div className="splash-feature-2-header">
              <h2>Icon material.</h2>
            </div>
            <div className="splash-feature-2-subheader">
              <p>Spacious. Soft. Next-level cozy. The Relaxed High-Rise Jogger is what other joggers want to be when they grow up.</p>
            </div>
            <button onClick={handleFeature2} className="splash-feature-2-button">SHOP JOGGERS</button>
          </div>
        </div>

        <div className="splash-carousel">
          <div className="splash-carousel-header">Best Sellers</div>
          <ProductCarousel products={products} />
        </div>


        <div className="splash-feature-container-2">
          <div className="splash-feature-3">
            <div className="splash-feature-3-img">
              <img src={featureImg3} alt="" />
            </div>
            <div className="splash-feature-3-header">
              <h2>“But it’s cold.” But nothing.</h2>
            </div>
            <div className="splash-feature-3-subheader">
              <p>Go in the lightweight warmth of the Surge Warm Half-Zip and your feet will follow.</p>
            </div>
            <button className="splash-feature-3-button" onClick={handleFeature3}>SHOP MEN'S</button>
          </div>
          <div className="splash-feature-4">
            <div className="splash-feature-4-img">
              <img src={featureImg4} alt="" />
            </div>
            <div className="splash-feature-4-header">
              <h2>Your core, accounted for.</h2>
            </div>
            <div className="splash-feature-4-subheader">
              <p>The Down for It All Vest locks in warmth with zoned insulation and lets you move with four-way stretch fabric.</p>
            </div>
            <button onClick={handleFeature4} className="splash-feature-4-button">SHOP WOMEN'S</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SplashPage;