/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Movies from './_app/Movies';
import EmptyPage from './_app/EmptyPage';
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


class FetchDataExample extends Component {
  render(){
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
            'title':'Welcome',
            'component': Movies
          }} />
    );
  }
}


AppRegistry.registerComponent('FetchDataExample', () => FetchDataExample);
