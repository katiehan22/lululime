import { NavLink } from 'react-router-dom';
import './MainNavigation.css';
import logo from '../../assets/images/logo.png';


function MainNavigation() {
  return (
    <div className='main-nav-container'>
      <div className='logo'>
        <NavLink exact to="/">
          <img src={logo} id="logo-img" />
        </NavLink>
      </div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="#">WOMEN</NavLink></li>
          <li><NavLink to="#">MEN</NavLink></li>
          <li><NavLink to="#">ACCESSORIES</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default MainNavigation;