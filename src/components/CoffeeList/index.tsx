import { useEffect, useState } from "react";
import CoffeeItem, { Coffee } from "../CoffeeItem";
import { Container, CoffeeListItems } from "./styles";

export default function CoffeeList() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    async function getCoffees() {
      const response = await fetch("http://localhost:3000/coffes").then(res => res.json());
      setCoffees(response);
    }
    getCoffees();
  }, [])


  return (
    <Container>
      <h2>Nossos cafés</h2>

      <CoffeeListItems>
        {coffees && coffees.map(coffee =>
          <CoffeeItem
            key={coffee.id}
            id={coffee.id}
            description={coffee.description}
            image={coffee.image}
            price={coffee.price}
            title={coffee.title}
            types={coffee.types}
          />
        )}
      </CoffeeListItems>
    </Container>
  )
}
