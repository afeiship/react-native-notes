import React, { Component } from 'react';
import {
  NavigatorIOS
} from 'react-native';


//Views:
import SearchScreen from './views/SearchScreen';
import List from './views/List';

//Styles:
import styles from './styles/app';

//rootViewController:
export default class NavigatorIOSExample extends Component {
  onLeftButtonPress(){
    this.refs.nav.pop();
  }
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        barTintColor='#FFF'
        leftButtonTitle='返回'
        onLeftButtonPress={this.onLeftButtonPress.bind(this)}
        rightButtonTitle='下一页'
        initialRoute={{
          title:'首页1111',//这是navigationController的title。
          component:List, //注释：这里是要写的是相当于iOS开发里navigationController的rootViewController页面。,
          passProps:{ navigator: this }
        }}
      />
    );
  }
}
