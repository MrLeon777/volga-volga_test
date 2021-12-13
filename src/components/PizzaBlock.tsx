import React from "react";
import styled from "styled-components";
import store from "../store";

import PizzaDescription from "./PizzaDescription";

const PizzaBlockWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 1100px;
  font-family: sans-serif;
`;

const PizzaImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  user-select: none;
`;

const PizzaBlock: React.FC = () => {
  return (
    <PizzaBlockWrapper>
      <PizzaImg
        src={store.getState().image}
        alt="pizza_image"
      />
      <PizzaDescription>
        
      </PizzaDescription>
      
    </PizzaBlockWrapper>

  );
};

export default PizzaBlock;
