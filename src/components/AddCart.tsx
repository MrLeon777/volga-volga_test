import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const AddCardBtn = styled.button`
  width: 200px;
  height: 60px;
  background-color: #4cc27f;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background-color: #139c4e;
    transition: all 0.3s ease-in-out;
  }
`;

const AddCart: React.FC<{ currentPrice: null | number }> = ({
  currentPrice,
}) => {

  const dispatch = useDispatch();

  const onAddCart = (payload: number | null) => {
    dispatch({
      type: "ADD_CART",
      payload,
    });
  };
  return (
    <AddCardBtn onClick={() => onAddCart(currentPrice)}>В корзину</AddCardBtn>
  );
};

export default AddCart;
