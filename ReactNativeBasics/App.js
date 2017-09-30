import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    // Define states
    this.state = {
      titleColor: 'red',
    };

    // Bind callback context
    this.changeColor = this.changeColor.bind(this);    
  }

  changeColor() {
    const newColor = `rgb(
      ${parseInt(Math.random() * 255)}, 
      ${parseInt(Math.random() * 255)}, 
      ${parseInt(Math.random() * 255)}
    )`;

    // Set new state, trigger render function
    this.setState({
      titleColor: newColor,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={styles.logoContainer}
          onPress={this.changeColor}
        >
          <Image source={require('./sitcon_logo.png')} />
        </TouchableHighlight>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: this.state.titleColor }]}>SITCON HK 2017</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});
