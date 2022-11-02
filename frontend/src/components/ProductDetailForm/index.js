import "./ProductDetailForm.css";
import { useEffect, useState } from "react"

const ProductDetailForm = ({product}) => {

  const COLOURCODES = {
    "Black": "#212121", 
    "Icing Blue": "#e2eff8", 
    "True Navy": "#00223f", 
    "White": "#e9e8eb"
  }

  const [colour, setColour] = useState({ "Black": false, "Icing Blue": false, "True Navy": false, "White": false});
  const [colourDisplay, setColourDisplay] = useState(product.colours[0]);
  const [colourStyleClassName, setColourStyleClassName] = useState({ "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked" });
  

  const handleColour = (colourSelection) => {
    const colourCopy = { "Black": false, "Icing Blue": false, "True Navy": false, "White": false };

    const colourStyleClassNameCopy = { "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked" }

    setColour({ ...colourCopy, [colourSelection]: true });
    setColourStyleClassName({ ...colourStyleClassNameCopy, [colourSelection]: "colour-button-checked" })
    setColourDisplay(colourSelection);
  }

  // set first color as checked by default 
  useEffect(() => {
    const colourStyleClassNameCopy2 = { "Black": "colour-button-unchecked", "Icing Blue": "colour-button-unchecked", "True Navy": "colour-button-unchecked", "White": "colour-button-unchecked" }
    
    setColourStyleClassName({ ...colourStyleClassNameCopy2, [product.colours[0]]: "colour-button-checked" })
  }, [])

  const [size, setSize] = useState({ 0: false, 2: false, 4: false, 6: false, 8: false, 10: false, 12: false, 14: false, 16: false, 18: false, 20: false })

  const [sizeDisplay, setSizeDisplay] = useState('');

  const [sizeStyleClassName, setSizeStyleClassName] = useState({ 0: 'size-button-unchecked', 2: 'size-button-unchecked', 4: 'size-button-unchecked', 6: 'size-button-unchecked', 8: 'size-button-unchecked', 10: 'size-button-unchecked', 12: 'size-button-unchecked', 14: 'size-button-unchecked', 16: 'size-button-unchecked', 18: 'size-button-unchecked', 20: 'size-button-unchecked' })

  const handleSize = (sizeSelection) => {
    const sizeCopy = { 0: false, 2: false, 4: false, 6: false, 8: false, 10: false, 12: false, 14: false, 16: false, 18: false, 20: false }

    const sizeStyleCopy = { 0: 'size-button-unchecked', 2: 'size-button-unchecked', 4: 'size-button-unchecked', 6: 'size-button-unchecked', 8: 'size-button-unchecked', 10: 'size-button-unchecked', 12: 'size-button-unchecked', 14: 'size-button-unchecked', 16: 'size-button-unchecked', 18: 'size-button-unchecked', 20: 'size-button-unchecked' }

    setSize({ ...sizeCopy, [sizeSelection]: true })
    setSizeStyleClassName({ ...sizeStyleCopy, [sizeSelection]: 'size-button-checked' })
    setSizeDisplay(sizeSelection);
  }

  return (
    <>
      <div className="product-details-form-container">
        <div className="colour-buttons-containter">
          <h2>Colour: {colourDisplay}</h2>
          <button 
            onClick={() => handleColour([product.colours[0]])}
            className={colourStyleClassName[product.colours[0]]} 
            style={{ backgroundColor: COLOURCODES[product.colours[0]]}} >
          </button>
          <button 
            onClick={() => handleColour([product.colours[1]])}
            className={colourStyleClassName[product.colours[1]]} 
            style={{ backgroundColor: COLOURCODES[product.colours[1]]}}>
          </button>
          <button  
            onClick={() => handleColour([product.colours[2]])}
            className={colourStyleClassName[product.colours[2]]} 
            style={{ backgroundColor: COLOURCODES[product.colours[2]]}}>
          </button>
          <button 
            onClick={() => handleColour([product.colours[3]])}
            className={colourStyleClassName[product.colours[3]]} 
            style={{ backgroundColor: COLOURCODES[product.colours[3]]}}>
          </button>
          <button 
            onClick={() => handleColour([product.colours[4]])}
            className={colourStyleClassName[product.colours[4]]} 
            style={{ backgroundColor: COLOURCODES[product.colours[4]]}}>
          </button>
        </div>

        <div className="size-buttons-containter">
          <h2>Size: {sizeDisplay} </h2> 
          <button onClick={() => handleSize('0')} className={sizeStyleClassName[0]}>
            <p>0</p>
          </button>
          <button onClick={() => handleSize('2')} className={sizeStyleClassName[2]}>
            <p>2</p>
          </button>
          <button onClick={() => handleSize('4')} className={sizeStyleClassName[4]}>
            <p>4</p>
          </button>
          <button onClick={() => handleSize('6')} className={sizeStyleClassName[6]}>
            <p>6</p>
          </button>
          <button onClick={() => handleSize('8')} className={sizeStyleClassName[8]}>
            <p>8</p>
          </button>
          <button onClick={() => handleSize('10')} className={sizeStyleClassName[10]}>
            <p>10</p>
          </button>
          <button onClick={() => handleSize('12')} className={sizeStyleClassName[12]}>
            <p>12</p>
          </button>
          <button onClick={() => handleSize('14')} className={sizeStyleClassName[14]}>
            <p>14</p>
          </button>
          <button onClick={() => handleSize('16')} className={sizeStyleClassName[16]}>
            <p>16</p>
          </button>
          <button onClick={() => handleSize('18')} className={sizeStyleClassName[18]}>
            <p>18</p>
          </button>
          <button onClick={() => handleSize('20')} className={sizeStyleClassName[20]}>
            <p>20</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductDetailForm;