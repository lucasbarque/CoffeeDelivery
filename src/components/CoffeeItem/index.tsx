import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { Container, CoffeeTypeList, CoffeeType, Title, Description, Bottom, Price, Selector, Cart, Actions } from './styles';

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
          <Selector>
            <Minus weight="bold" />
            <span>6</span>
            <Plus weight="bold" />
          </Selector>
          <Cart>
            <ShoppingCartSimple weight="fill" size={22} />
          </Cart>
        </Actions>
      </Bottom>

    </Container>
  )
}
