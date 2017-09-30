import { addObjects } from '../utils/utils';
import { CLEAR_CART, ADD_ONE_TO_CART } from '../actions/cart';


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
    case ADD_ONE_TO_CART:
      return Object.assign({}, state, addObjects(state, action.items));
    default:
      return state;
  }
}