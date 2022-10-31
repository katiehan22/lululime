import "./SplashPage.css";
import splashImg from "../../assets/images/splash.png";
import { NavLink } from 'react-router-dom';
import SplashMembership from "../SplashMembership";

const SplashPage = () => {
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
      </div>
    </>
  )
}

export default SplashPage;