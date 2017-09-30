import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


class Store extends Component {
  constructor(props) {
    super(props);

    this.gotoCart = this.gotoCart.bind(this);
  }

  gotoCart() {
    Actions.cart(ActionConst.REPLACE);
  }

  renderSection(stock, section) {
    return (
      <View>
        <Text style={styles.sectionTitle}>{ section }</Text>
        <View>
        {
          Object.keys(stock).map((item, i) => {
            return <Text key={i}>{ item }: { stock[item] }</Text>;
          })
        }
        </View>
      </View>
    );
  }

  render() {
    const { store } = this.props;
    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={styles.gotoCartBtn}
          onPress={this.gotoCart}
        >
          <Text style={styles.gotoCartBtnText}>Goto Cart</Text>
        </TouchableHighlight>

        <View style={styles.displayStoreContainer}>
          {
            Object.keys(store).map((section, i) => {
              return (
                <View style={styles.sectionContainer} key={i}>
                  {
                    this.renderSection(store[section], section)
                  }
                </View>
              );
            })
          }
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  displayStoreContainer: {
    flex: 10,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'blue',
  },
  gotoCartBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gotoCartBtnText: {
    color: 'red',
  },
});

Store.propTypes = {
};

export default Store;