import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  Navigator
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class Movies extends Component{

  getInitialState(){
    return {
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 != row2
      }),
      loaded:false
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
        loaded:true
      });
    })
    .done()
  }
  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          Loading Views
        </Text>
      </View>
    );
  }
  renderMovie(movie){
    return (
      <View style={styles.container} key={movie.id}>
        <Image
          source={{uri:movie.posters.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {movie.title}
          </Text>
          <Text style={styles.year}>
            {movie.year}
          </Text>
        </View>
        <View style={styles.separator}></View>
      </View>
    );
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView} />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  listView:{
    marginTop:65,
  },
  container: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer:{
    flex:1,
    position:'absolute',
    top:0,
    left:55
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'left',
    width:260
  },
  year:{
    textAlign:'center'
  }
});
