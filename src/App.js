import './index.css';
import {ReactComponent as CartLogo} from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';
import ImageSlider from "./ImageSlider";
import {ReactComponent as Plus} from "./images/icon-plus.svg";
import {ReactComponent as Minus} from "./images/icon-minus.svg";
import { useState } from 'react';
import HeaderStyles from './HeaderStyles';
import CartStyles from './CartStyles';
import DesktopImageSlider from './DesktopImageSlider';
import { CartCount } from './CartCount';
import Main from './Main';
import {MobileHeader} from './Header';
import { DesktopHeader } from './Header';
import CartItems from './CartItems';

export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
        className="hr"
    />
);

function App() {
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(amount + 1)
  }

  const decrease = () => {
    setAmount(amount - 1)
  }

  const [showCartItems, setShowCartItems] = useState(false);

  const handleToggleCartItem = () => {
    setShowCartItems(!showCartItems);
  }

  const addToCart = () => {
    setShowCartItems(true);
  }

  const[ showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  }
  return (
    <div className="App">
      <HeaderStyles>
        <MobileHeader className="mobile-header"/>
        <DesktopHeader className="desktop-header"/>
        <div className='header-right'>
          <div className='countAndLogo'>
          <CartLogo className='cartLogo' onClick={handleToggleCart}/>
          <CartCount amount={amount} showCartItems={showCartItems}/>
          </div>
            <CartItems amount={amount}
             showCartItems={showCartItems}
              handleToggleCartItem={handleToggleCartItem}
               showCart={showCart}/>
            
              <img src={avatar} alt="avatar" width='35px'/> 
        </div>
      </HeaderStyles>    
      <ColoredLine color='var(--Grayish-blue)' />
      <Main>
      <ImageSlider/>
      <DesktopImageSlider/>
      <CartStyles className='cartStyles'>
        <div className='content'>
        <h6>Sneaker Company</h6>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className='desc'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className='price'>
          <div className='new-price'>
            <h3>$125.00</h3>
            <div className='discount'>
              <h4>50%</h4>   
            </div>
          </div>
          <div className='initial-price'>
            <p>$250.00</p>
          </div>
        </div>
        <div className='addToCart'>
          <div className='amount'>
            <Plus className='plus' onClick={increase}/>
            <Minus className='minus' onClick={decrease}/>
            <button className='amount-number'>{amount}</button>
          </div>
          <button className='button' type='button' onClick={addToCart}> 
         <CartLogo className='cart-button'/> Add to Cart
          </button>
        </div>
       </div>
      </CartStyles>
      </Main>
    </div>
  );
}

export default App;
