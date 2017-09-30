import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import configureStore from './src/store/configureStore';
import Store from './src/containers/Store';
import Cart from './src/containers/Cart';

const store = configureStore();
const RouterWithRedux = connect()(Router);


class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root'>
            <Scene key='store' component={ Store } title='Store' />
            <Scene initial key='cart' component={ Cart } title='Cart' />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default Root;