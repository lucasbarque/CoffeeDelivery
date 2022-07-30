import { ShoppingCartSimple } from "phosphor-react";
import Button from "../Button";
import Selector from "../Selector";

import { Container, CoffeeTypeList, CoffeeType, Title, Description, Bottom, Price, Actions } from './styles';

import { CoffeeProps } from '../CoffeeList'

interface CoffeeItemProps {
  coffee: CoffeeProps;
}

export default function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <Container>
      <img src={`/src/assets/${coffee.image}`} alt="Café Expresso" />

      <CoffeeTypeList>
        {coffee.types && coffee.types.map(type => <CoffeeType>{type}</CoffeeType>)}
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
          <Selector />
          <Button kind="cart" icon={<ShoppingCartSimple weight="fill" />} />
        </Actions>
      </Bottom>

    </Container>
  )
}
