import { ShoppingCartSimple } from "phosphor-react";
import Button from "../Button";
import Selector from "../Selector";

import { Container, CoffeeTypeList, CoffeeType, Title, Description, Bottom, Price, Actions } from './styles';

import { useContext } from "react";
import { Coffee, CoffeeContext } from "../../contexts/CoffeeContext";

interface CoffeeItemProps {
  coffee: Coffee;
}

export default function CoffeeItem({ coffee }: CoffeeItemProps) {
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
          <Selector id={coffee.id} />
          <Button kind="cart" icon={<ShoppingCartSimple weight="fill" />} />
        </Actions>
      </Bottom>

    </Container>
  )
}
