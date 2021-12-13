import { AnyAction, createStore } from "redux";
import getApiProduct, { ApiProduct } from "../product";

export interface IState extends ApiProduct { 
  shoppingCart: number[] 
}

const initialState: IState = {
  ...getApiProduct(),
  shoppingCart: [],
};

const myReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CART":
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, payload],
      };
    default:
      return state;
  }
};

export default createStore(myReducer);
