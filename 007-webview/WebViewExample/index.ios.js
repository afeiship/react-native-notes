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
  WebView,
  View
} from 'react-native';


/*

var webapp = require('./webapp/index.html');
<WebView source={webapp}></WebView>
*/

import webapp from './_app/dacang-remix-h5/index.html';


class WebViewExample extends Component {
  render() {
    return (
      <WebView
      source={{
        uri:'/Users/feizheng/github/fei-react-native/007-webview/WebViewExample/_app/dacang-remix-h5/index.html',
        method:'GET'
      }}
      style={{marginTop: 20}}
      >
      </WebView>
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
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WebViewExample', () => WebViewExample);
