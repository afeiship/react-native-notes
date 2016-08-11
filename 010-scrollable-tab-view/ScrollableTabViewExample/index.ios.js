/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import FirstPage from './_app/FirstPage';
import SecondPage from './_app/SecondPage';
import ThirdPage from './_app/ThirdPage';


class ScrollableTabViewExample extends Component {
  render() {
    return (
      <ScrollableTabView style={styles.container}>
        <FirstPage tabLabel="FirstPage Title" />
        <SecondPage tabLabel="SecondPage Title" />
        <ThirdPage tabLabel="ThirdPage Title" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ScrollableTabViewExample', () => ScrollableTabViewExample);
