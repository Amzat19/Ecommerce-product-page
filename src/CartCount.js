import styled from "styled-components";

const CartCountStyles = styled.div`
background-color: var(--Orange);
color: var(--White);
width: 15px;
height: 15px;
border-radius: 10px;
font-size: 10px;
font-weight: 700;
position: absolute;
top: 1px;
right: 25px;

p {
  margin-left: 4px;
  padding-top: 2px;
}

@media (max-width: 1023px) {
  right: 12px;
}

`;

export const CartCount = ({amount, showCartItems}) => {
    return (
      <CartCountStyles className={showCartItems ? '': 'CartCount'}>
        <p>{amount}</p>
      </CartCountStyles>
    )
  }