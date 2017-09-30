export const CLEAR_CART = 'CLEAR_CART';


export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}


export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART';


export function addOneToCart(section, item) {
  return {
    type: ADD_ONE_TO_CART,
    items: {
      [section]: {
        [item]: 1,
      },
    },
  };
}