import React, { Component } from 'react';
import {
  Text,
  AlertIOS,
  ScrollView,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import styles from '../styles/views/list';
import SearchScreen from './SearchScreen';

export default class List extends Component{

  toScreenPage(a){

    this.props.navigator.refs.nav.push({
      title:'Search',
      component:SearchScreen
    })
  }
  goTo(){
    AlertIOS.alert(
      'Test click by fei',
      '王学森，你妈喊你回家娶媳妇儿',
      [
        {
          text: '知道啦！',
          onPress: () => console.log('Tapped OK'),
        }
      ]
    );
  }
  render(){
    return(
        <ScrollView style = {[styles.flex,styles.scrollViewTop]}>
            <Text style = {styles.list_item,styles.textColor} onPress = {this.goTo}>✨ 王学森，你妈喊你回家娶媳妇儿</Text>
            <Text style = {styles.list_item} onPress = {this.goTo}>✨ 女子无才便是德</Text>
            <Text style = {styles.list_item} onPress = {this.goTo}>✨ 过年逼婚！</Text>


            <TouchableOpacity onPress={this.toScreenPage.bind(this)}>
              <Text style={styles.grayBg}>点进进入SearchScreen Page</Text>
            </TouchableOpacity>
        </ScrollView>
    );
  }
}
