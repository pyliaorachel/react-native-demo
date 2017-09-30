import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';


class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart } = this.props;

    return (
      <View style={styles.container}>
        {
          Object.keys(cart).map((item, i) => {
            return <Text key={i}>{ item }: { cart[item] }</Text>;
          })
        }
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
});

Cart.propTypes = {
};

export default Cart;