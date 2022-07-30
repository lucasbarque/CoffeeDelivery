import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import CoffeeItem from "../CoffeeItem";
import { Container, CoffeeListItems } from "./styles";

export default function CoffeeList() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <Container>
      <h2>Nossos cafés</h2>

      <CoffeeListItems>
        {coffees && coffees.map(coffee =>
          <CoffeeItem
            key={coffee.id}
            coffee={coffee}
          />
        )}
      </CoffeeListItems>
    </Container>
  )
}
