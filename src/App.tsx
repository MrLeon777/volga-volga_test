import React from "react";
import Cart from "./components/Cart";
import PizzaBlock from "./components/PizzaBlock";
import styled from "styled-components";
import { IState } from "./store";
import { connect } from "react-redux";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

interface AppProps {
  shoppingCart: number[];
}

const App: React.FC<AppProps> = ({ shoppingCart }) => {
  return (
    <Wrapper>
      <PizzaBlock></PizzaBlock>
      {Boolean(shoppingCart.length) && (
        <Cart price={shoppingCart.reduce((prev, current) => current + prev)} />
      )}
    </Wrapper>
  );
};

export default connect(({ shoppingCart }: IState) => ({
  shoppingCart,
}))(App);
