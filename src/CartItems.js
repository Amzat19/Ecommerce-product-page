import {ColoredLine} from './App';
import styled from "styled-components";
import productImg from "./images/image-product-1-thumbnail.jpg";
import {ReactComponent as DeleteIcon} from "./images/icon-delete.svg";

const Cart = styled.div`
width: 300px;
height: 200px;
background-color: var(--White);
position: absolute;
top: 65px;
right: 25px;
box-shadow: 5px 5px 35px var(--Grayish-blue);
border-radius: 10px;
transition: 850ms;

.header-card {
  display: flex;
  align-items: center;
  padding-left: 7px;
  height: 50px;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
}

.empty{
  .filled-content {
    display: none;
  }
  .empty-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 700;
    color: var(--Dark-grayish-blue);
  }
  }
  .filled {
    .empty-msg {
      display: none;
    }
    .filled-content {
      display: grid;
      grid-template-columns: 0.8fr 1.8fr 0.3fr;
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 10px;
      .img-div{
        img {
        width: 60px;
        border-radius: 5px; 
        }
      }
      .desc {
        align-self: center;
        h6 {
          color: var( --Dark-grayish-blue);
          font-family: 'Kumbh Sans', sans-serif;
          font-weight: 300;
          font-size: 13px;
        }
        p {
          color: var( --Dark-grayish-blue);
          font-family: 'Kumbh Sans', sans-serif;
          font-weight: 300;
        }
      }
      .del {
        justify-self: center;
        align-self: center;
      }
      .checkout {
        grid-column: span 3;
        background-color: var(--Orange);
        color: var(--White);
        font-family: 'Kumbh Sans', sans-serif;
        height: 45px;
        border-radius: 5px;
        margin-top: 5px;
      }
      .checkout:hover {
        cursor: pointer;
        opacity: 0.5;
      } 
    }
}

@media (max-width: 1023px) {
width: 85%;
height: 200px;
background-color: var(--White);
position: absolute;
top: 65px;
right: 25px;
box-shadow: 5px 5px 35px var(--Grayish-blue);
border-radius: 10px;
z-index: 10;

.hr {
  visibility: visible;
}
}
`;

const CartItems = ({amount, showCartItems, handleToggleCartItem, showCart}) => {
    const totalAmount = 125 * amount;
      return (
      <Cart className={showCart ? '' : 'inactiveCart'}>
        <div className='header-card'>
          Cart
        </div>
        <ColoredLine color='var(--Grayish-blue)'/>
        <div className={showCartItems ? 'filled' : 'empty'}>
          <div className='empty-msg'>
          <p>Your cart is empty.</p>
        </div>
          <div className="filled-content">
          <div className='img-div'>
            <img src={productImg} alt="product"></img>
          </div>
          <div className='desc'>
            <h6>Fall Limited Edition Sneakers</h6>
            <p>$125.00 x {amount} <strong>{`$${totalAmount}.00`}</strong></p>
          </div>
          <div className='del' onClick={handleToggleCartItem}>
            <DeleteIcon/>
          </div>
          <button className='checkout' type='button'>CheckOut</button>
        </div>
        </div>
        
      </Cart>
    );
  }
  
  export default CartItems;