
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './styles/index';

export default class FirstPage extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>333 Page</Text>
      </View>
    );
  }
}
