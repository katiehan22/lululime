import SignupForm from "../SignupForm";
import WelcomeSide from "../WelcomeSide";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className='signup-page'>
      <div className="welcome-top">
        <h1>Wellbeing made easier. We've got you.</h1>
      </div>
      <div className="welcome-bottom">
        <WelcomeSide />
        <div class="vl"></div>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupPage;