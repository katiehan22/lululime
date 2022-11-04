import { NavLink, useHistory } from 'react-router-dom';
import './MainNavigation.css';
import logo from '../../assets/images/logo.png';


function MainNavigation() {
  const history = useHistory();

  return (
    <div className='main-nav-container'>
      <div className='logo'>
        <NavLink exact to="/">
          <img src={logo} id="logo-img" />
        </NavLink>
      </div>
      <nav className="main-nav">
        <ul className='main-nav-li'>
          <li id="womens-li"><NavLink to="/products/womens">WOMEN</NavLink>
            <div className='womens-dropdown'>
              <ul className='womens-list'>
                <li className='category-li'><NavLink to="/products/womens">WOMEN'S CLOTHES</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/womens/leggings">Leggings</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/womens/hoodies">Hoodies & Sweatshirts</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/womens/joggers">Joggers</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/womens/shirts">Shirts</NavLink></li>
              </ul>
            </div>
          </li>
          <li id="mens-li"><NavLink to="/products/mens">MEN</NavLink>
            <div className='mens-dropdown'>
              <ul className='mens-list'>
                <li className='category-li'><NavLink to="/products/mens">MEN'S CLOTHES</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/mens/joggers">Joggers</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/mens/hoodies">Hoodies & Sweatshirts</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/mens/shorts">Shorts</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/mens/shirts">Shirts</NavLink></li>
              </ul>
            </div>
          </li>
          <li id="accessories-li"><NavLink to="/products/accessories">ACCESSORIES</NavLink>
            <div className='accessories-dropdown'>
              <ul className='accessories-list'>
                <li className='category-li'><NavLink to="/products/accessories">ACCESSORIES</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/accessories/belt-bags">Belt-Bags</NavLink></li>
                <li className='subcategory-li'><NavLink to="/products/accessories/backpacks">Backpacks</NavLink></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div className='bag-icon-container'>
        <i id='bag-icon' class="fa-solid fa-bag-shopping" onClick={() => history.push('/bag')}></i>
      </div>
    </div>
  )
}

export default MainNavigation;