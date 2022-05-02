import styled from 'styled-components';

const CartStyles = styled.div`
font-family: 'Kumbh Sans', sans-serif;
width: 80%;
margin: 0 auto;

h6 {
  font-size: 16px;
  text-transform: uppercase;
  color: var(--Orange);
  margin-top: 15px;
  font-weight: 700;
}

h2 {
  margin-top: 20px;
  color: var(--Very-dark-blue);
}

p {
  color: var(--Dark-grayish-blue);
  font-weight: 300;
  width: 300px;
}

.price {
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
margin-top: 20px;

.new-price {
  display: flex;
  align-items: center;
  h3 {
    font-size: 25px;
    padding-right: 10px;
  }
  .discount {
    border-radius: 10px;
    background-color: var(--Pale-orange);
    height: 30px;
    width: 50px;
    position: relative;
    margin-right: 10px;
    h4 {
      color: var(--Orange);
      position: absolute;
      top: 13%;
      left: 20%;
    }
  }
}
.initial-price {
  min-width: 0;
  max-width: 60px;
  overflow: hidden;
  justify-self: end;

  p {
    text-decoration: line-through;
    color: var(--Grayish-blue);
    font-weight: 700;
  }
  
}
}

.amount {
  background-color: var(--Light-grayish-blue);
  min-height: 0;
  overflow: hidden;
  max-width: 80vw;
  height: 45px;
  margin-top: 25px;
  margin-bottom: 15px;
  position: relative;
  border-radius: 10px;

  .plus {
    position: absolute;
    top: 30%;
    right: 5%;
  }

  .plus:hover, .minus:hover {
    cursor: pointer;
    opacity: 0.5;
  } 

  .minus {
    position: absolute;
    top: 40%;
    left: 5%;
  }

  .amount-number {
    position: absolute;
    top: 25%;
    left: 50%;
    color: var(--Black);
    font-weight: 700;
  }
}

.button {
  height: 45px;
  width: 80vw;
  border-radius: 10px;
  background-color: var(--Orange);
  color: var(--White);
  margin-bottom: 20px;
  box-shadow: 0px 20px 20px var(--Pale-orange);
}

.button:hover {
  cursor: pointer;
  opacity: 0.5;
}

.cart-button {
  path {
    fill: var(--White)
  }
  margin-right: 10px;
}

`;

export default CartStyles;