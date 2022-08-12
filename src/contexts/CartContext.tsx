import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextType {
  cart: Coffee[];
  addCoffeeToCart: (coffee: Coffee) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface Coffee {
  coffee: {
    id: number;
    title: string;
    types?: string[] | null;
    description: string;
    price: number;
    image: string;
  };
  quantity: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([]);

  function changeCoffeeItemQuantity(coffee: Coffee, quantity: number) {
    const cartIndex = cart.findIndex((c) => c.id === coffee.id);

    if (cartIndex > 0) {
      const newCart = [...cart];
      newCart[cartIndex].quantity = quantity;
      setCart(newCart);
    } else {
    }
  }

  return (
    <CartContext.Provider value={{ cart, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
