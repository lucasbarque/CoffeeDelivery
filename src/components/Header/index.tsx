import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import { Buttons, Container, Location } from './styles';

export default function Header() {
  return (
    <Container>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <Buttons>
        <Location>
          <MapPin weight='fill' size={22} />
          Porto Alegre, RS
        </Location>
        <NavLink to='/checkout'>
          <Button
            kind='cart-badge'
            icon={<ShoppingCart weight='fill' />}
            labelQuantity={0}
          />
        </NavLink>
      </Buttons>
    </Container>
  );
}
