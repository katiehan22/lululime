import "./SplashPage.css";
import splashImg from "../../assets/images/splash.png";
import featureImg1 from "../../assets/images/splashfeature1.png"
import featureImg2 from "../../assets/images/splashfeature2.png"
import { NavLink, useHistory } from 'react-router-dom';
import SplashMembership from "../SplashMembership";

const SplashPage = () => {
  const history = useHistory();

  const handleFeature1 = (e) => {
    e.preventDefault();
    history.push('/#');
  }

  const handleFeature2 = (e) => {
    e.preventDefault();
    history.push('/#');
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
              <li className="splash-li"><NavLink to="#">All Women's</NavLink></li>
              <li className="splash-li"><NavLink to="#">All Men's</NavLink></li>
              <li className="splash-li"><NavLink to="#">All Accessories</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="product-carousel-placeholder">
        </div>

        <div className="splash-features">
          <div className="splash-feature-1">
            <div className="splash-feature-1-img">
              <img src={featureImg1}/>
            </div>
            <div className="splash-feature-1-header">
              <h2>Beakout performer: fleece.</h2>
            </div>
            <div className="splash-feature-1-subheader">
              <p>Just when you thought the Scuba Oversized Funnel-Neck couldn’t get any better—may we introduce: the new, longer-length fleece edition.</p>
            </div>
            <button className="splash-feature-1-button" onClick={handleFeature1}>SHOP HOODIES</button>
          </div>
          <div className="splash-feature-2">
            <div className="splash-feature-2-img">
              <img src={featureImg2} />
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
      </div>
    </>
  )
}

export default SplashPage;