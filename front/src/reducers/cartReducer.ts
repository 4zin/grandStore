import { CartAction, ProductsCartType } from "../types"

export const cartInitialState: ProductsCartType = (() => {
    if (typeof window !== 'undefined') {
        const storedCart = window.localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } else {
        return [];
    }
})();

export const updateLocalStorage = (state: ProductsCartType) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", JSON.stringify(state));
    }
  };

  export const cartReducer = (state: ProductsCartType, action: CartAction) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_CART": {
        const { id } = payload;
        const productInCartIndex = state.findIndex((item) => item.id === id);
  
        if (productInCartIndex >= 0) {
          const newState = [...state];
          newState[productInCartIndex].quantity += 1;
          updateLocalStorage(newState);
          return newState;
        }
  
        const newState = [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ];
  
        updateLocalStorage(newState);
        return newState;
      }
  
      case "REMOVE_FROM_CART": {
        const { id } = payload;
        const newState = state.filter((item) => item.id !== id);
  
        updateLocalStorage(newState);
        return newState;
      }
  
      case "CLEAR_CART": {
        updateLocalStorage([]);
        return [];
      }
  
      default:
        return state;
    }
}