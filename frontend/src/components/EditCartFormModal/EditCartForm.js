import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCartItem } from '../../store/cart';
import { updateCartItem } from '../../store/cart';
import testImg from '../../assets/images/product-item-test.png';
import './EditCartForm.css';

const EditCartForm = ({ cartItemId, setShowModal}) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  let cartItem = useSelector(state => state.cartItems ? state.cartItems[cartItemId] : null);
  const [primaryImgIdx, setPrimaryImgIdx] = useState(cartItem.primaryImgIdx);
  const imgSource = cartItem.productImgUrls[primaryImgIdx];

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

  const handleColour = (colourSelection, colourSelectionIdx) => {
    const colourCopy = { "Black": false, "Icing Blue": false, "True Navy": false, "White": false, "Water Drop": false, "Dark Olive": false, "Green Foliage": false, "Dark Red": false, "Electric Turquoise": false, "Wasabi": false, "Pomegranate": false, "White Opal": false, "Faint Lavender": false, "Smoked Spruce": false, "Heathered Core Ultra Light Grey": false, "Carob Brown": false, "Poolside": false, "Roasted Brown": false, "Graphite Grey": false, "Red Merlot": false, "Natural Ivory": false, "Brier Rose": false, "Burnt Caramel": false };

    const colourStyleClassNameCopy = { "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked", "Water Drop": "colour-button-unchecked", "Dark Olive": "colour-button-unchecked", "Green Foliage": "colour-button-unchecked", "Dark Red": "colour-button-unchecked", "Electric Turquoise": "colour-button-unchecked", "Wasabi": "colour-button-unchecked", "Pomegranate": "colour-button-unchecked", "White Opal": "colour-button-unchecked", "Faint Lavender": "colour-button-unchecked", "Smoked Spruce": "colour-button-unchecked", "Heathered Core Ultra Light Grey": "colour-button-unchecked", "Carob Brown": "colour-button-unchecked", "Poolside": "colour-button-unchecked", "Roasted Brown": "colour-button-unchecked", "Graphite Grey": "colour-button-unchecked", "Red Merlot": "colour-button-unchecked", "Natural Ivory": "colour-button-unchecked", "Brier Rose": "colour-button-unchecked", "Burnt Caramel": "colour-button-unchecked" }

    setColour({ ...colourCopy, [colourSelection]: true });
    setColourStyleClassName({ ...colourStyleClassNameCopy, [colourSelection]: "colour-button-checked" })
    setColourDisplay(colourSelection);
    setPrimaryImgIdx(colourSelectionIdx*2);
  }

  const [size, setSize] = useState({
    "0": false, "2": false, "4": false, "6": false, "8": false, "10": false, "12": false, "14": false, "16": false, "18": false, "20": false, "XS/S": false, "S/M": false, "M/L": false, "L/XL": false, "XL/XXL": false, "XS": false, "S": false, "M": false, "L": false, "XL": false, "XXL": false, "XXXL": false, "ONE SIZE": false
  })

  const [sizeDisplay, setSizeDisplay] = useState(cartItem.size);

  const [sizeStyleClassName, setSizeStyleClassName] = useState({
    "0": 'size-button-unchecked', "2": 'size-button-unchecked', "4": 'size-button-unchecked', "6": 'size-button-unchecked', "8": 'size-button-unchecked', "10": 'size-button-unchecked', "12": 'size-button-unchecked', "14": 'size-button-unchecked', "16": 'size-button-unchecked', "18": 'size-button-unchecked', "20": 'size-button-unchecked', "XS/S": 'size-button-unchecked', "S/M": 'size-button-unchecked', "M/L": 'size-button-unchecked', "L/XL": 'size-button-unchecked', "XL/XXL": 'size-button-unchecked', "XS": 'size-button-unchecked', "S": 'size-button-unchecked', "M": 'size-button-unchecked', "L": 'size-button-unchecked', "XL": 'size-button-unchecked', "XXL": 'size-button-unchecked', "XXXL": 'size-button-unchecked', "ONE SIZE": 'size-button-unchecked'
  });

  const handleSize = (sizeSelection) => {
    const sizeCopy = { "0": false, "2": false, "4": false, "6": false, "8": false, "10": false, "12": false, "14": false, "16": false, "18": false, "20": false, "XS/S": false, "S/M": false, "M/L": false, "L/XL": false, "XL/XXL": false, "XS": false, "S": false, "M": false, "L": false, "XL": false, "XXL": false, "XXXL": false, "ONE SIZE": false }

    const sizeStyleCopy = { "0": 'size-button-unchecked', "2": 'size-button-unchecked', "4": 'size-button-unchecked', "6": 'size-button-unchecked', "8": 'size-button-unchecked', "10": 'size-button-unchecked', "12": 'size-button-unchecked', "14": 'size-button-unchecked', "16": 'size-button-unchecked', "18": 'size-button-unchecked', "20": 'size-button-unchecked', "XS/S": 'size-button-unchecked', "S/M": 'size-button-unchecked', "M/L": 'size-button-unchecked', "L/XL": 'size-button-unchecked', "XL/XXL": 'size-button-unchecked', "XS": 'size-button-unchecked', "S": 'size-button-unchecked', "M": 'size-button-unchecked', "L": 'size-button-unchecked', "XL": 'size-button-unchecked', "XXL": 'size-button-unchecked', "XXXL": 'size-button-unchecked', "ONE SIZE": 'size-button-unchecked' }

    setSize({ ...sizeCopy, [sizeSelection]: true })
    setSizeStyleClassName({ ...sizeStyleCopy, [sizeSelection]: 'size-button-checked' })
    setSizeDisplay(sizeSelection);
  }

  // set the correct colour and size style
  useEffect(() => {
    const colourStyleClassNameCopy2 = { "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked", "Water Drop": "colour-button-unchecked", "Dark Olive": "colour-button-unchecked", "Green Foliage": "colour-button-unchecked", "Dark Red": "colour-button-unchecked", "Electric Turquoise": "colour-button-unchecked", "Wasabi": "colour-button-unchecked", "Pomegranate": "colour-button-unchecked", "White Opal": "colour-button-unchecked", "Faint Lavender": "colour-button-unchecked", "Smoked Spruce": "colour-button-unchecked", "Heathered Core Ultra Light Grey": "colour-button-unchecked", "Carob Brown": "colour-button-unchecked", "Poolside": "colour-button-unchecked", "Roasted Brown": "colour-button-unchecked", "Graphite Grey": "colour-button-unchecked", "Red Merlot": "colour-button-unchecked", "Natural Ivory": "colour-button-unchecked", "Brier Rose": "colour-button-unchecked", "Burnt Caramel": "colour-button-unchecked" };

    const sizeStyleCopy2 = { "0": 'size-button-unchecked', "2": 'size-button-unchecked', "4": 'size-button-unchecked', "6": 'size-button-unchecked', "8": 'size-button-unchecked', "10": 'size-button-unchecked', "12": 'size-button-unchecked', "14": 'size-button-unchecked', "16": 'size-button-unchecked', "18": 'size-button-unchecked', "20": 'size-button-unchecked', "XS/S": 'size-button-unchecked', "S/M": 'size-button-unchecked', "M/L": 'size-button-unchecked', "L/XL": 'size-button-unchecked', "XL/XXL": 'size-button-unchecked', "XS": 'size-button-unchecked', "S": 'size-button-unchecked', "M": 'size-button-unchecked', "L": 'size-button-unchecked', "XL": 'size-button-unchecked', "XXL": 'size-button-unchecked', "XXXL": 'size-button-unchecked', "ONE SIZE": 'size-button-unchecked' }

    setColourStyleClassName({ ...colourStyleClassNameCopy2, [cartItem.colour]: "colour-button-checked" });
    setSizeStyleClassName({ ...sizeStyleCopy2, [cartItem.size]: 'size-button-checked' })
  }, [dispatch])

  const handleUpdateCartItem = () => {
    const updatedItem = {
      ...cartItem,
      userId: user.id,
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      colour: colourDisplay,
      size: sizeDisplay, 
      primaryImgIdx: primaryImgIdx
    }
    dispatch(updateCartItem(updatedItem));
    setShowModal(false);
  }

  if (!cartItem) {
    return null;
  }

  return (
    <>
      <div className='edit-cart-form-container'>
        <div className='edit-cart-img'>
          <img src={imgSource} alt="" />
        </div>
        <div className='edit-cart-form-right'>
          <div className='edit-cart-form-right-header'>
            <div className='edit-cart-product-details-name'>
              {cartItem.productName}
            </div>
            <div>
              <button id="close-edit-modal-button" onClick={() => setShowModal(false)}>X</button>
            </div>
          </div>
          <div className='edit-cart-product-details-price'>
            ${cartItem.productPrice}
          </div>
          <div className='edit-cart-colour-buttons-container'>
            <h2>Colour: {colourDisplay}</h2>
            <button
              onClick={() => handleColour(cartItem.productColours[0], 0)}
              className={colourStyleClassName[cartItem.productColours[0]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[0]] }} >
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[1], 1)}
              className={colourStyleClassName[cartItem.productColours[1]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[1]] }}>
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[2], 2)}
              className={colourStyleClassName[cartItem.productColours[2]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[2]] }}>
            </button>
            <button
              onClick={() => handleColour(cartItem.productColours[3], 3)}
              className={colourStyleClassName[cartItem.productColours[3]]}
              style={{ backgroundColor: COLOURCODES[cartItem.productColours[3]] }}>
            </button>
          </div>
          <div className="edit-cart-size-buttons-containter">
            <h2>Size: {sizeDisplay} </h2>
            <button
              onClick={() => handleSize(cartItem.productSizes[0])}
              className={sizeStyleClassName[cartItem.productSizes[0]]}>
              <p>{cartItem.productSizes[0]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[1])}
              className={sizeStyleClassName[cartItem.productSizes[1]]}>
              <p>{cartItem.productSizes[1]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[2])}
              className={sizeStyleClassName[cartItem.productSizes[2]]}>
              <p>{cartItem.productSizes[2]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[3])}
              className={sizeStyleClassName[cartItem.productSizes[3]]}>
              <p>{cartItem.productSizes[3]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[4])}
              className={sizeStyleClassName[cartItem.productSizes[4]]}>
              <p>{cartItem.productSizes[4]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[5])}
              className={sizeStyleClassName[cartItem.productSizes[5]]}>
              <p>{cartItem.productSizes[5]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[6])}
              className={sizeStyleClassName[cartItem.productSizes[6]]}>
              <p>{cartItem.productSizes[6]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[7])}
              className={sizeStyleClassName[cartItem.productSizes[7]]}>
              <p>{cartItem.productSizes[7]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[8])}
              className={sizeStyleClassName[cartItem.productSizes[8]]}>
              <p>{cartItem.productSizes[8]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[9])}
              className={sizeStyleClassName[cartItem.productSizes[9]]}>
              <p>{cartItem.productSizes[9]}</p>
            </button>
            <button
              onClick={() => handleSize(cartItem.productSizes[10])}
              className={sizeStyleClassName[cartItem.productSizes[10]]}>
              <p>{cartItem.productSizes[10]}</p>
            </button>
          </div>

          <div className="update-cart-item-container">
            <button id="update-cart-item-button" onClick={() => handleUpdateCartItem()}>UPDATE ITEM</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCartForm;