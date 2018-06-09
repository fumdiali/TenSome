/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import HomeScreen from './components/homescreen';
import { StackNavigator } from 'react-navigation';
import UserScreen from './components/userscreen';
import ProfileScreen from './components/profilescreen';

//type Props = {};
/* export default class App extends Component {
  
  render() {
    return (
        <HomeScreen />
    );
  }
} */
export default App = StackNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen },
  Profile: { screen: ProfileScreen }
});

