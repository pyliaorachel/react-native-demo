import { subtractObjects } from '../utils/utils';
import { CHECKOUT } from '../actions/store';


export default function store(state = {
  fruit: {
    banana: 10,
    apple: 20,
  },
  snack: {
    cookie: 15,
    chocolate: 30,
  },
}, action) {
  switch (action.type) {
    case CHECKOUT:
      return Object.assign({}, state, subtractObjects(state, action.items));
    default:
      return state;
  }
}