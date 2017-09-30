import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import * as CartActions from '../actions/cart';
import * as MainActions from '../actions/main';


function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators(CartActions, dispatch),
    bindActionCreators(MainActions, dispatch),
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);