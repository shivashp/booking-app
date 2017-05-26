/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Primary Color: #f30
 */

import React, { Component } from 'react';
import {
  AppRegistry, StatusBar, View
} from 'react-native';
import Root from './src/Root';

export default class Roomie extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <Root />
      </View>
    );
  }
}

AppRegistry.registerComponent('Roomie', () => Roomie);
