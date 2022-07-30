import { useEffect, useState } from "react";
import CoffeeItem from "../CoffeeItem";
import { Container, CoffeeListItems } from "./styles";

export interface CoffeeProps {
  id: number;
  title: string;
  types?: (string)[] | null;
  description: string;
  price: number;
  image: string;
}


export default function CoffeeList() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);


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
        {coffees.map(coffee =>
          <CoffeeItem
            key={coffee.id}
            coffee={coffee}
          />
        )}
      </CoffeeListItems>
    </Container>
  )
}
