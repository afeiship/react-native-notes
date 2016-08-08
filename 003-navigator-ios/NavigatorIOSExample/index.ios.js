/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Basic:
import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

//Views:
import SearchScreen from './_app/views/SearchScreen';

//Styles:
import styles from './_app/styles/index.ios';

//rootViewController:
class NavigatorIOSExample extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title:'movies',//这是navigationController的title。
          component:SearchScreen //注释：这里是要写的是相当于iOS开发里navigationController的rootViewController页面。
        }}
      />
    );
  }
}

//App Start:
AppRegistry.registerComponent('NavigatorIOSExample', () => NavigatorIOSExample);
