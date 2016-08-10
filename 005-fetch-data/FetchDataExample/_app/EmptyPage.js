import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

export default class EmptyPage extends Component{
  constructor(props) {
    super(props)
    this.state ={
      testData:'2234'
    }
  }
  render(){
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textColor}>Hello App - testData->{this.state.testData}</Text>
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
