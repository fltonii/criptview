import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

type Props = {};
export default class App extends Component {
  
  render() {
    return (
      <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#444fff',
    marginBottom: 5,
  },
});
