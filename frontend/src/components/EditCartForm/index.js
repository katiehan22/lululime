import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCartItem } from '../../store/cart';
import testImg from '../../assets/images/product-item-test.png';
import './EditCartForm.css';

const EditCartForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const { cartItemId } = useParams();
  let cartItem = useSelector(state => state.cartItems ? state.cartItems[cartItemId] : null);

  useEffect(() => {
    dispatch(fetchCartItem(cartItemId))
  }, [dispatch, cartItemId])

  const COLOURCODES = {
    "Black": "#212121",
    "Icing Blue": "#e2eff8",
    "True Navy": "#00223f",
    "White": "#e9e8eb",
    "Water Drop": "#8695bb",
    "Dark Olive": "#342b22",
    "Green Foliage": "#8ca545",
    "Dark Red": "#c2333f",
    "Electric Turquoise": "#84dadd",
    "Wasabi": "#d1d582",
    "Pomegranate": "#890138",
    "White Opal": "#eadfce",
    "Faint Lavender": "#d2c3cd",
    "Smoked Spruce": "#414941",
    "Heathered Core Ultra Light Grey": "#eaeae8",
    "Carob Brown": "#959271",
    "Poolside": "#0069bf",
    "Roasted Brown": "#855036",
    "Graphite Grey": "#474447",
    "Red Merlot": "#64262c",
    "Natural Ivory": "#e9e3d9",
    "Brier Rose": "#e2867f",
    "Burnt Caramel": "#ad7550"
  }

  const [colour, setColour] = useState({
    "Black": false, "Icing Blue": false, "True Navy": false, "White": false, "Water Drop": false, "Dark Olive": false, "Green Foliage": false, "Dark Red": false, "Electric Turquoise": false, "Wasabi": false, "Pomegranate": false, "White Opal": false, "Faint Lavender": false, "Smoked Spruce": false, "Heathered Core Ultra Light Grey": false, "Carob Brown": false, "Poolside": false, "Roasted Brown": false, "Graphite Grey": false, "Red Merlot": false, "Natural Ivory": false, "Brier Rose": false, "Burnt Caramel": false
  });

  const [colourDisplay, setColourDisplay] = useState(cartItem.colour);
  const [colourStyleClassName, setColourStyleClassName] = useState({
    "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked", "Water Drop": "colour-button-unchecked", "Dark Olive": "colour-button-unchecked", "Green Foliage": "colour-button-unchecked", "Dark Red": "colour-button-unchecked", "Electric Turquoise": "colour-button-unchecked", "Wasabi": "colour-button-unchecked", "Pomegranate": "colour-button-unchecked", "White Opal": "colour-button-unchecked", "Faint Lavender": "colour-button-unchecked", "Smoked Spruce": "colour-button-unchecked", "Heathered Core Ultra Light Grey": "colour-button-unchecked", "Carob Brown": "colour-button-unchecked", "Poolside": "colour-button-unchecked", "Roasted Brown": "colour-button-unchecked", "Graphite Grey": "colour-button-unchecked", "Red Merlot": "colour-button-unchecked", "Natural Ivory": "colour-button-unchecked", "Brier Rose": "colour-button-unchecked", "Burnt Caramel": "colour-button-unchecked"
  });

  const handleColour = (colourSelection) => {

  }

  // set the correct colour and size style
  // useEffect(() => {
  //   const colourStyleClassNameCopy2 = { "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked", "Water Drop": "colour-button-unchecked", "Dark Olive": "colour-button-unchecked", "Green Foliage": "colour-button-unchecked", "Dark Red": "colour-button-unchecked", "Electric Turquoise": "colour-button-unchecked", "Wasabi": "colour-button-unchecked", "Pomegranate": "colour-button-unchecked", "White Opal": "colour-button-unchecked", "Faint Lavender": "colour-button-unchecked", "Smoked Spruce": "colour-button-unchecked", "Heathered Core Ultra Light Grey": "colour-button-unchecked", "Carob Brown": "colour-button-unchecked", "Poolside": "colour-button-unchecked", "Roasted Brown": "colour-button-unchecked", "Graphite Grey": "colour-button-unchecked", "Red Merlot": "colour-button-unchecked", "Natural Ivory": "colour-button-unchecked", "Brier Rose": "colour-button-unchecked", "Burnt Caramel": "colour-button-unchecked" };

  //   setColourStyleClassName({ ...colourStyleClassNameCopy2, [cartItem.colour]: "colour-button-checked" });
  // }, [dispatch])

  // if (!cartItem || cartItem.productColours.length === 0) {
  //   return null;
  // }

  return (
    <>
      <div className='edit-cart-form-container'>
        <div className='edit-cart-img'>
          <img src={testImg} alt="" />
        </div>
        <div className='edit-cart-form-right'>
          <div className='edit-cart-product-details-name'>
            {cartItem.productName}
          </div>
          <div className='edit-cart-product-details-price'>
            ${cartItem.productPrice}
          </div>
          <div className='edit-cart-colour-buttons-container'>
            <h2>Colour: {colourDisplay}</h2>
            {cartItem.productColours}
            {/* <button
              onClick={() => handleColour(cartItem.productColours[0])}
              className={colourStyleClassName[cartItem.productColours[0]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[0]] }} >
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[1])}
              className={colourStyleClassName[cartItem.productColours[1]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[1]] }}>
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[2])}
              className={colourStyleClassName[cartItem.productColours[2]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[2]] }}>
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[3])}
              className={colourStyleClassName[cartItem.productColours[3]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[3]] }}>
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCartForm;