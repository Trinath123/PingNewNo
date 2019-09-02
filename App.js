/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AppNavigator from './Route';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
        <FlashMessage position="bottom" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
