import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Store from '../components/Store';
import * as StoreActions from '../actions/store';
import * as MainActions from '../actions/main';
import { addOneToCart } from '../actions/cart';


function mapStateToProps(state) {
  return {
    store: state.store,
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators(StoreActions, dispatch),
    bindActionCreators(MainActions, dispatch),
    bindActionCreators({ addOneToCart }, dispatch),
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);