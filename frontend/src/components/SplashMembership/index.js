import { useSelector } from "react-redux";
import "./SplashMembership.css";
import { useHistory } from 'react-router-dom';

const SplashMembership = () => {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  let headerText;
  let subheaderText;
  let buttonText;

  const handleShopNow = (e) => {
    e.preventDefault();
    history.push('/products/womens');
  }

  const handleJoinNow = (e) => {
    e.preventDefault();
    history.push('/login');
  }

  if(sessionUser) {
    headerText = "Welcome to lululime Membership.";
    subheaderText = "Do more of what you love. We've got you.";
    buttonText = (
      <button onClick={handleShopNow} className="membership-button">SHOP NOW</button>
    )
  } else {
    headerText = "lululime Membership is here.";
    subheaderText = "Gain access to benefits that make being well easier. We've got you.";
    buttonText = (
      <button onClick={handleJoinNow} className="membership-button">JOIN NOW FOR FREE</button>
    )
  }

  return (
    <>
      <div className="splash-membership-container">
        <div className="splash-membership-contents">
          <h2 id="splash-membership-header">{headerText}</h2>
          <p id="splash-membership-subheader">{subheaderText}</p>
          {buttonText}
        </div>
      </div>
    </>
  )
}

export default SplashMembership;