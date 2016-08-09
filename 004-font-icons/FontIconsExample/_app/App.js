import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles/app';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native by fei!
        </Text>
        <Icon name="camera" size={20} color="#ddd" />
        <Icon name="calendar-o" size={30} color="#F60" />
        <Icon name="cloud" size={40} color="#00f" />
        <Icon name="coffee" size={50} color="#999" />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
