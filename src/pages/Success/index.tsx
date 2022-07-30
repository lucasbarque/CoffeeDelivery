import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, Order, Details, Item, Icon } from './styles'

export default function Success() {
  return (
    <Container>
      <Order>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <Details>
            <Item>
              <Icon color="purple">
                <MapPin weight='fill' />
              </Icon>
              <div>
                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </Item>
            <Item>
              <Icon color="yellow">
                <Timer weight='fill' />
              </Icon>
              <div>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min</strong></p>
              </div>
            </Item>
            <Item>
              <Icon color="yellow-dark">
                <CurrencyDollar weight='fill' />
              </Icon>
              <div>
                <p>Pagamento na entrega</p>
                <p><strong>Cartão de Crédito</strong></p>
              </div>
            </Item>
          </Details>
        </div>
        <img src="/src/assets/illustration.svg" alt="" />
      </Order>
    </Container>
  )
}
