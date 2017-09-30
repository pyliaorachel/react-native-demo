import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


class Store extends Component {
  constructor(props) {
    super(props);

    this.renderSection = this.renderSection.bind(this);
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
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    color: 'blue',
  },
});

Store.propTypes = {
};

export default Store;