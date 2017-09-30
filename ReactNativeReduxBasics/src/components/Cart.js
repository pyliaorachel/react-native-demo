import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.checkout = this.checkout.bind(this);
  }

  checkout() {
    const { cart, checkout, clearCart } = this.props;

    checkout(cart);
    clearCart();
  }

  renderSection(items, section) {
    return (
      <View>
        <Text style={styles.sectionTitle}>{ section }</Text>
        <View>
        {
          Object.keys(items).map((item, i) => {
            return <Text key={i}>{ item }: { items[item] }</Text>;
          })
        }
        </View>
      </View>
    );
  }

  render() {
    const { cart } = this.props;

    return (
      <View style={styles.container}>

        <TouchableHighlight
          style={styles.gotoStoreBtn}
          onPress={this.checkout}
        >
          <Text style={styles.gotoStoreBtnText}>Checkout</Text>
        </TouchableHighlight>

        <View style={styles.displayCartContainer}>
          {
            Object.keys(cart).map((section, i) => {
              return (
                <View style={styles.sectionContainer} key={i}>
                  {
                    this.renderSection(cart[section], section)
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
  displayCartContainer: {
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
  gotoStoreBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gotoStoreBtnText: {
    color: 'red',
  },
});

Cart.propTypes = {
};

export default Cart;