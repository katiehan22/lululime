import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column-1">
          <p>SITES</p>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="https://shop.lululemon.com/">Real Lululemon Site</a></li>
          </ul>
        </div>
        <div className="footer-column-2">
          <p>TECHNOLOGIES</p>
          <ul>
            <li>Ruby on Rails</li>
            <li>React</li>
            <li>Redux</li>
            <li>PostgreSQL</li>
            <li>JQuery</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="footer-column-3">
          <p>CONTACT</p>
          <ul>
            <li><a href="https://github.com/katiehan22/lululime">Github</a></li>
            <li><a href="https://www.linkedin.com/in/katiehan22/">LinkedIn</a></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Footer;