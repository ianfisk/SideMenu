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

class SideMenu extends Component {
  constructor(props) {
    // TODO: prop types and validation... must have non neg menuWidth, menuOpenBuffer <= menuWidth
    // TODO: Don't allow swiping the current screen past the leftmost bound of the menu no matter the size/margins of the menu
    // TODO: if menu/children styles aren't passed, default to screen width/height
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      panResponder: PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: this._handlePanResponderGrant.bind(this),
        onPanResponderMove: this._handlePanResponderMove.bind(this),
        onPanResponderRelease: this._handlePanResponderEnd.bind(this),
        onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
      })
    };

    // State not used in render method
    this._isMenuOpen = false;

    // bindings
    this._menuIsOpenToThreshold = this._menuIsOpenToThreshold.bind(this);
    this._absoluteXValueOfCurrentSceneDuringPan = this._absoluteXValueOfCurrentSceneDuringPan.bind(this);
  }
  
  render() {
    return (
      <View>
        <View style={[styles.absolutePosition, this.props.menuStyle]}>
          {this.props.menu}
        </View>
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.absolutePosition, this.props.childrenStyle]}>
          {this.props.children}
        </Animated.View>
      </View>
    )
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    // set the offset to be 0 or the menu width, and reset the values to 0 to avoid a jump
    // before the binding with gestureState.dx takes over and resets the x value
    this.state.pan.setOffset({x: this.state.pan.x._value, y: 0});
    this.state.pan.setValue({x: 0, y: 0});
  }

  _handlePanResponderMove(e: Object, gestureState: Object) {
    // update pan.x unless pan goes off left of screen. Then set pan to be the very left 
    if (this._absoluteXValueOfCurrentSceneDuringPan(gestureState) >= 0)
      this.state.pan.setValue({x: gestureState.dx, y: 0});
    else
      this.state.pan.setValue({x: this._isMenuOpen ? -this.props.menuWidth : 0, y: 0});
  }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
    // pan.x._value == gestureState.dx
    let toValue = {x: 0, y: 0};
    let shouldMenuOpen = this._menuIsOpenToThreshold(gestureState);
    if (shouldMenuOpen)
      toValue = {x: this.props.menuWidth, y: 0};

    // Set x value to be absolute position because the animation is from an offset of 0,
    // and currently the offset may be the menuWidth
    if (this._isMenuOpen)
      this.state.pan.setValue({x: this.props.menuWidth + this.state.pan.x._value, y: 0});

    // reset the offset to 0 because we are manually setting the x value to be absolute
    this.state.pan.setOffset({x: 0});
    Animated.spring(
      this.state.pan,
      {
        toValue: toValue,
        friction: 9
      }
    ).start();

    this._isMenuOpen = shouldMenuOpen;
  }

  _menuIsOpenToThreshold(gestureState: object) {
    // this.props.menuOpenBuffer defines a buffer to the left of the menuWidth in which to snap the menu open
    let menuOpenBuffer = this.props.menuOpenBuffer ? this.props.menuOpenBuffer : 0;
    return this._isMenuOpen
      ? gestureState.dx >= -menuOpenBuffer
      : gestureState.dx >= this.props.menuWidth - menuOpenBuffer;
  }

  _absoluteXValueOfCurrentSceneDuringPan(gestureState: object) {
    return !this._isMenuOpen
      ? gestureState.dx
      : this.props.menuWidth + gestureState.dx
  }
}

var styles = StyleSheet.create({
  absolutePosition: {
    position: 'absolute',
  },
});

export default SideMenu;
