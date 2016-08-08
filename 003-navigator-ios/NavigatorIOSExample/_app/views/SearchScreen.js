import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class SearchScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Search content: 131231232</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    top:64,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color:'#f00',
    margin: 10,
  },
});
