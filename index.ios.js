 // @flow
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Main from './src/components/Main';
import Menu from './src/components/Menu';
import SideMenu from './src/containers/SideMenu';

class SideMenuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Home',
      openMenu: false,
    };
  }

  handleHeaderPress(route: string) {
    this.setState({
      openMenu: true
    });
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
        onPress={() => this.handleHeaderPress()}
      />;

    const currentScene = this.getCurrentSceneForRoute();
    
    return (
      <SideMenu
        openMenu={this.state.openMenu}
        menu={menu}
        menuWidth={200}
        menuOpenBuffer={100}
        headerComponent={header}
        useLinearGradient={true}>
        {currentScene}
      </SideMenu>
    );
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

AppRegistry.registerComponent('SideMenuApp', () => SideMenuApp);
