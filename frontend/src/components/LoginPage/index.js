import LoginForm from "../LoginFormPage";
import WelcomeSide from "../WelcomeSide";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="welcome-top">
        <h1>Wellbeing made easier. We've got you.</h1>
      </div>
      <div className="welcome-bottom">
        <WelcomeSide />
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage;