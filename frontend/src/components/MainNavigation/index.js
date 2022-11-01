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
        <ul className='main-nav-li'>
          <li id="womens-li"><NavLink to="#">WOMEN</NavLink>
            <div className='womens-dropdown'>
              <ul className='womens-list'>
                <li className='category-li'><NavLink to="#">WOMEN'S CLOTHES</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Leggings</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Hoodies & Sweatshirts</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Joggers</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Shirts</NavLink></li>
              </ul>
            </div>
          </li>
          <li id="mens-li"><NavLink to="#">MEN</NavLink>
            <div className='mens-dropdown'>
              <ul className='mens-list'>
                <li className='category-li'><NavLink to="#">MEN'S CLOTHES</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Joggers</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Hoodies & Sweatshirts</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Shorts</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Shirts</NavLink></li>
              </ul>
            </div>
          </li>
          <li id="accessories-li"><NavLink to="#">ACCESSORIES</NavLink>
            <div className='accessories-dropdown'>
              <ul className='accessories-list'>
                <li className='category-li'><NavLink to="#">ACCESSORIES</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Belt-Bags</NavLink></li>
                <li className='subcategory-li'><NavLink to="#">Backpacks</NavLink></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainNavigation;