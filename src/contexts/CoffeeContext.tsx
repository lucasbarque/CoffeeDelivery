import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react'

export interface Coffee {
  id: number;
  title: string;
  types?: (string)[] | null;
  description: string;
  price: number;
  image: string;
}

interface CoffeeContextType {
  cart: Coffee[];
  coffees: Coffee[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {

  const [cart, setCart] = useState<Coffee[]>([]);
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  console.log(cart)

  useEffect(() => {
    async function getCoffees() {
      const response = await fetch("http://localhost:3000/coffes").then(res => res.json());
      setCoffees(response);
    }
    getCoffees();
  }, [])

  function addToCart(id: number) {
    console.log({ id })
    const coffee = coffees.find(coffee => coffee.id === id);
    if (coffee) {
      setCart(cart => [...cart, coffee])
    }
  };

  function removeFromCart(id: number) {
    setCart(cart => cart.filter(coffee => coffee.id !== id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        coffees,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
