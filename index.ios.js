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
import SideMenu from './src/containers/SideMenu';
import Home from './src/components/Home';
import Main from './src/components/Main';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SideMenuApp extends Component {
  render() {
    const menu = <Main />;
    
    return (
      <SideMenu
        menu={menu}
        menuStyle={styles.menu}
        childrenStyle={[styles.menu, {paddingTop: 20}]}>
        <Home />
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: screenWidth,
    height: screenHeight,
  },
});

AppRegistry.registerComponent('SideMenuApp', () => SideMenuApp);
