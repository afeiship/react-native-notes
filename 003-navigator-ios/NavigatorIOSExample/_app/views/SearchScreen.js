import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles/views/search-screen';

export default class SearchScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>我是首页的内容</Text>
      </View>
    );
  }
}
