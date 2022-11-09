import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchCartItems } from '../../store/cart';
import './MainNavigation.css';
import logo from '../../assets/images/logo.png';
import BagPreviewIndex from '../BagPreviewIndex';
import bagIcon from '../../assets/images/shoppingbag.png';


function MainNavigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  let cartItems = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

  const calculateNumItems = () => {
    let num = cartItems.reduce((acc, ele) => acc + ele.quantity, 0);
    if (user) {
      return num;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems());
    }
  }, [dispatch, cartItems.length, user])

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
        <div className='bag-icon' onClick={() => history.push('/bag')}>
          <img src={bagIcon} id="bag-icon" />
        </div>
        <div className='bag-icon-badge'>
          <div className='bag-icon-number'>
            {calculateNumItems()}
          </div>
        </div>
        <BagPreviewIndex />
      </div>
    </div>
  )
}

export default MainNavigation;