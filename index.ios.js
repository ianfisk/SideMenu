 // @flow
 'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import SideMenu from './src/containers/SideMenu';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class SideMenuApp extends Component {
  render() {
    return (
      <SideMenu
        style={styles.menu}>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'powderblue',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('SideMenuApp', () => SideMenuApp);
