import { CLEAR_CART } from '../actions/cart';


export default function cart(state = {
  fruit: {
    banana: 1,
  },
  snack: {
    cookie: 2,
  },
}, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
}