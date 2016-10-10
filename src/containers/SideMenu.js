// @flow
'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from '../components/Home';
import Main from '../components/Main';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY()
    };

    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x, // this.state.pan.x = gestureState.dx (binds)
      }]),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
  }
  
  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.menu}>
          {this.props.menu}
        </View>
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.children]}>
          {this.props.children}
        </Animated.View>
      </View>
    )
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    // offset == the origin, value == the amount added to the origin
    console.log("*****************************PanResponder GRANT");
    this.state.pan.setOffset({x: this.state.pan.x._value});
  }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
    // pan.{x,y}._value == gestureState.{dx,dy} so we need to add the distance of the pan to the offset and set the new values
    console.log("*****************************PanResponder END");
    this.state.pan.flattenOffset();
  }
}

var styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
  },
  children: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
  },
});

export default SideMenu;
