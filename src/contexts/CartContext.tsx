import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextType {
  coffees: Coffee[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface Coffee {
  id: number;
  title: string;
  types?: string[] | null;
  description: string;
  price: number;
  image: string;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  async function fetchCoffees() {
    const response = await fetch('http://localhost:3000/coffes').then((res) =>
      res.json()
    );
    setCoffees(response);
  }

  useEffect(() => {
    fetchCoffees();
  }, []);

  return (
    <CartContext.Provider value={{ coffees }}>{children}</CartContext.Provider>
  );
}
