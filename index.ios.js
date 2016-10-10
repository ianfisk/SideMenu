 // @flow
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SideMenu from './src/containers/SideMenu';
import Home from './src/components/Home';
import Main from './src/components/Main';

class SideMenuApp extends Component {
  render() {
    const menu = <Main />;
    
    return (
      <SideMenu
        menu={menu}
        style={styles.menu}>
        <Home />
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('SideMenuApp', () => SideMenuApp);
