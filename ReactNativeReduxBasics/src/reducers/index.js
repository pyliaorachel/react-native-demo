import { combineReducers } from 'redux';

import store from './store';
import cart from './cart';
import main from './main';


const rootReducer = combineReducers({
  store,
  cart,
  main,
});

export default rootReducer;