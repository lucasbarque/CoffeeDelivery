import { ShoppingCartSimple } from "phosphor-react";
import Button from "../Button";
import Selector from "../Selector";

import { Container, CoffeeTypeList, CoffeeType, Title, Description, Bottom, Price, Actions } from './styles';

export default function CoffeeItem() {
  return (
    <Container>
      <img src="/src/assets/expresso.svg" alt="Café Expresso" />

      <CoffeeTypeList>
        <CoffeeType>Tradicional</CoffeeType>
        <CoffeeType>Com leite</CoffeeType>
      </CoffeeTypeList>

      <Title>Expresso Tradicional</Title>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>

      <Bottom>
        <Price>
          <small>R$</small> 9,90
        </Price>

        <Actions>
          <Selector />
          <Button kind="cart" icon={<ShoppingCartSimple weight="fill" />} />
        </Actions>
      </Bottom>

    </Container>
  )
}
