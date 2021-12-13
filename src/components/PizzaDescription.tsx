import React, { useState, useEffect } from "react";
import styled from "styled-components";
import store from "../store";
import AddCart from "./AddCart";

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    pizzatype?: string;
    pizzasize?: string;
    currentPrice?: null | number;
  }
}

const PizzaContent = styled.div`
  margin-left: 72px;
  h2 {
    color: #9c9c9c;
  }
  p {
    color: #5f5f5f;
  }
`;

const PizzaValues = styled.div`
  display: flex;
  span:first-child {
    margin-right: 75px;
  }
  margin: 50px 0;
  font-weight: 700;
  font-size: 20px;
`;

const PizzaButtons = styled.div`
  ul {
    padding: 0;
    width: 100%;
    list-style-type: none;
    display: flex;
    border: 2px solid #d0d0d0;
    border-radius: 10px;
    li {
      flex: 1 1;
      text-align: center;
      padding: 25px 0;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        background-color: #d5f0de;
        &:first-child {
          border-radius: 8px 0 0 8px;
        }
        &:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
      &.active {
        background-color: #4cc27f;
        color: #fff;
        &:first-child {
          border-radius: 8px 0 0 8px;
        }
        &:last-child {
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
`;

const PizzaPrice = styled.div`
  font-weight: 700;
  font-size: 40px;
`;



interface availableType {
  activeObject: { title: string; type: string; id: string };
  types: Array<{ title: string; type: string; id: string }>;
}
interface availableSize {
  activeObject: { title: string; size: string; id: string };
  sizes: Array<{ title: string; size: string; id: string }>;
}

store.subscribe(() => console.info(store.getState()));

const PizzaDescription: React.FC = () => {
  const [availableTypes, setAvailableTypes] = useState<availableType>({
    activeObject: { title: "Обычное тесто", type: "common", id: "0" },
    types: [
      { title: "Обычное тесто", type: "common", id: "0" },
      { title: "Тонкое тесто", type: "thin", id: "1" },
    ],
  });
  const [availableSizes, setAvailableSizes] = useState<availableSize>({
    activeObject: { title: "Маленькая", size: "s", id: "0" },
    sizes: [
      { title: "Маленькая", size: "s", id: "0" },
      { title: "Средняя", size: "m", id: "1" },
      { title: "Большая", size: "l", id: "2" },
    ],
  });

  const [currentType, setType] = useState<string | null>(null);
  const [currentSize, setSize] = useState<string | null>(null);

  const [currentPrice, setPrice] = useState<null | number>(null);
  const [currentWeight, setWeight] = useState<number | null>(null);
  const [currentEnergy, setEnergy] = useState<number | null>(null);

  const getInfoProduct = () => {
    const type = currentType;
    const size = currentSize;
    if (store.getState().size === size && store.getState().type === type) {
      setPrice(store.getState().price);
      setWeight(store.getState().weight);
      setEnergy(store.getState().energy);
    } else {
      store.getState().variant.forEach((item) => {
        if (item.size === size && item.type === type) {
          setPrice(item.price);
          setWeight(item.weight);
          setEnergy(item.energy);
        }
      });
    }
  };

  function changeActiveType(index: number): string {
    return availableTypes.types[index].id === availableTypes.activeObject.id
      ? "active"
      : "";
  }
  function changeActiveSize(index: number): string {
    return availableSizes.sizes[index].id === availableSizes.activeObject.id
      ? "active"
      : "";
  }

  useEffect(() => {
    setType(availableTypes.activeObject.type);
    setSize(availableSizes.activeObject.size);
  }, [availableTypes, availableSizes]);

  useEffect(() => {
    if (currentType === "common") {
      setAvailableSizes({
        ...availableSizes,
        activeObject: availableSizes.sizes[0],
      });
    } else {
      setAvailableSizes({
        ...availableSizes,
        activeObject: availableSizes.sizes[1],
      });
    }
  }, [currentType]);

  useEffect(() => {
    getInfoProduct();
  }, [currentType, currentSize]);
  

  return (
    <PizzaContent>
      <h2>{store.getState().category}</h2>
      <h1>{store.getState().title}</h1>
      <p>{store.getState().description}</p>
      <PizzaValues>
        <span>{`${currentWeight} г`}</span>
        <span>{`${currentEnergy} ккал`}</span>
      </PizzaValues>
      <PizzaButtons>
        <ul>
          {availableTypes.types.map((item, index) => (
            <li
              key={index}
              pizzatype={item.type}
              className={changeActiveType(index)}
              onClick={() => {
                setAvailableTypes({
                  ...availableTypes,
                  activeObject: availableTypes.types[index],
                });
              }}>
              {item.title}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.sizes.map((item, index) => !(currentType === 'thin' && item.size === 's') && (
            <li
              key={index}
              pizzasize={item.size}
              className={changeActiveSize(index)}
              onClick={() => {
                setAvailableSizes({
                  ...availableSizes,
                  activeObject: availableSizes.sizes[index],
                });
              }}>
              {item.title}
            </li>
          ))}
        </ul>
      </PizzaButtons>
      <PizzaPrice>{`${currentPrice} ₽`}</PizzaPrice>
      <AddCart currentPrice={currentPrice}></AddCart>
    </PizzaContent>
  );
};

export default PizzaDescription;
