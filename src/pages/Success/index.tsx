import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Order, Details, Item, Icon } from './styles'

export default function Success() {
  return (
    <Container>
      <Order>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Details>
          <Item>
            <Icon>
              <MapPin weight='fill' />
            </Icon>
            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
            <p>Farrapos - Porto Alegre, RS</p>
          </Item>
          <Item>
            <Icon>
              <Timer weight='fill' />
            </Icon>
            <p>Previsão de entrega</p>
            <p><strong>20 min - 30 min</strong>></p>
          </Item>
          <Item>
            <Icon>
              <CurrencyDollar weight='fill' />
            </Icon>
            <p>Pagamento na entrega</p>
            <p><strong>Cartão de Crédito</strong></p>
          </Item>
        </Details>
      </Order>
      <img src="/src/assets/illustration.svg" alt="" />
    </Container>
  )
}
