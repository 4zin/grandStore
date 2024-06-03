import { createContext, useReducer } from "react";
import { CartContextProps, ProductsCartType } from "../types";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: ProductsCartType[0]) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product: ProductsCartType[0]) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
