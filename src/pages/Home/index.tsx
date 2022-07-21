import { ShoppingCart } from 'phosphor-react'

import Logo from '../../components/Logo'
import { Container, Header, Buttons, Location, Cart } from './styles'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Buttons>
          <Location>Porto Alegre, RS</Location>
          <Cart color="yellow">
            <ShoppingCart weight='fill' size={22} />
            <span>3</span>
          </Cart>
        </Buttons>
      </Header>
    </Container>
  )
}