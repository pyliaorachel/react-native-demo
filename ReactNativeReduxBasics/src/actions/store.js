export const CHECKOUT = 'CHECKOUT';


export function checkout(items) {
  return {
    type: CHECKOUT,
    items,
  };
}