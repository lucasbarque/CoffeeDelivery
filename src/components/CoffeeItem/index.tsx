import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import Button from "../Button";
import Selector from "../Selector";

import { Container, CoffeeTypeList, CoffeeType, Title, Description, Bottom, Price, Actions } from './styles';

export interface Coffee {
  id: number;
  title: string;
  types?: (string)[] | null;
  description: string;
  price: number;
  image: string;
}

export default function CoffeeItem(coffee: Coffee) {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity >= 1) {
      setQuantity((state) => state - 1);
    }
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <Container>
      <img src={`/src/assets/${coffee.image}`} alt="Café Expresso" />

      <CoffeeTypeList>
        {coffee.types && coffee.types.map(type => <CoffeeType key={type}>{type}</CoffeeType>)}
      </CoffeeTypeList>

      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Bottom>
        <Price>
          <small>R$</small> {new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(coffee.price)}
        </Price>

        <Actions>
          <Selector onDecrease={handleDecrease} onIncrease={handleIncrease} quantity={quantity} />
          <Button kind="cart" icon={<ShoppingCartSimple weight="fill" onClick={handleAddToCart} />} />
        </Actions>
      </Bottom>

    </Container>
  )
}
