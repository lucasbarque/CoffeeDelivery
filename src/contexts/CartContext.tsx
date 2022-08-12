import produce from 'immer';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContextType {
  cart: CartCoffeeItem[];
  changeCoffeeItemQuantity: (coffee: Coffee, quantity: number) => void;
  removeItem: (coffeeId: number) => void;
  clearCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface Coffee {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartCoffeeItem {
  coffee: Coffee;
  quantity: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartCoffeeItem[]>(() => {
    const cartStorage = localStorage.getItem('@CoffeeDelivery:cart');

    if (cartStorage) {
      return JSON.parse(cartStorage);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart));
  }, [cart]);

  function changeCoffeeItemQuantity(coffee: Coffee, quantity: number) {
    const cartIndex = cart.findIndex((c) => c.coffee.id === coffee.id);
    if (cartIndex >= 0) {
      setCart(
        produce(cart, (draft) => {
          draft[cartIndex].quantity = quantity;
        })
      );
    } else {
      setCart(
        produce(cart, (draft) => {
          draft.push({
            coffee: {
              ...coffee,
            },
            quantity,
          });
        })
      );
    }
  }

  function removeItem(coffeeId: number) {
    const coffeeIndex = cart.findIndex((c) => c.coffee.id === coffeeId);

    setCart(
      produce(cart, (draft) => {
        draft.splice(coffeeIndex, 1);
      })
    );
  }

  function clearCart() {
    localStorage.removeItem('@CoffeeDelivery:cart');
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, changeCoffeeItemQuantity, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
