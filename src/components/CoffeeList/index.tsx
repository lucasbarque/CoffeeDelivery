import CoffeeItem from "../CoffeeItem";
import { Container, CoffeeListItems } from "./styles";

export default function CoffeeList() {
  return (
    <Container>
      <h2>Nossos cafés</h2>

      <CoffeeListItems>
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </CoffeeListItems>
    </Container>
  )
}
