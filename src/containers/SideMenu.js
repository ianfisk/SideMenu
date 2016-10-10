// @flow
'use strict';

import React, { Component } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from '../components/Home';
import Main from '../components/Main';

class SideMenuClass extends Component {
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
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y, // this.state.pan.y = gestureState.dy (binds)
      }]),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
  }
  
  render() {
    return (
      <Animated.View
        {...this.state.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.menu]}>
        {this.props.children}
      </Animated.View>
    )
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    // offset == the origin, value == the amount added to the origin
    console.log("*****************************PanResponder GRANT");
    this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
  }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
    // pan.{x,y}._value == gestureState.{dx,dy} so we need to add the distance of the pan to the offset and set the new values
    console.log("*****************************PanResponder END");
    this.state.pan.flattenOffset();
  }
}

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
});

export default SideMenuClass;
