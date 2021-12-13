import React from "react";
import styled from "styled-components";

const StyledCart = styled.div`
  background-color: #8287b6;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`;

interface CartProps {
  price: number
}

const Cart: React.FC<CartProps> = ({ price }) => {
  return <StyledCart>{`Итого к оплате: ${price} ₽`}</StyledCart>;
};

export default Cart;
