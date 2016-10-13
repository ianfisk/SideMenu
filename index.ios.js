 // @flow
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Main from './src/components/Main';
import Menu from './src/components/Menu';
import SideMenu from './src/containers/SideMenu';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SideMenuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Home',
      openMenu: false,
    };
  }
  
  handleMenuPress(route: string) {
    this.setState({
      route: route,
      openMenu: false
    });
  }

  getCurrentSceneForRoute() {
    switch (this.state.route.toLowerCase()) {
      case 'home':
        return <Home />;
      case 'main':
        return <Main />;
    }
  }
  
  render() {
    const menu = <Menu onPress={(route) => this.handleMenuPress(route)} />;
    const header =
      <Header
        title={this.state.route.capitalize()}
        onPress={() => {
          this.setState({
            openMenu: true
          });
        }}
      />;

    const currentScene = this.getCurrentSceneForRoute();
    
    return (
      <SideMenu
        openMenu={this.state.openMenu}
        menu={menu}
        menuWidth={200}
        menuOpenBuffer={100}
        menuStyle={styles.menu}
        headerComponent={header}
        childrenStyle={styles.menu}>
        {currentScene}
      </SideMenu>
    );
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const styles = StyleSheet.create({
  menu: {
    width: screenWidth,
    height: screenHeight,
  },
});

AppRegistry.registerComponent('SideMenuApp', () => SideMenuApp);
