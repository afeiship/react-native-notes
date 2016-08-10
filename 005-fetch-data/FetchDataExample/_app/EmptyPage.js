import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

export default class EmptyPage extends Component{
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textColor}>Hello App</Text>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCCCCC',
    padding:10
  },
  textColor:{
    color:'#f00',
    fontSize:30
  }
});
