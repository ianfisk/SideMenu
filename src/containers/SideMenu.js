// @flow
'use strict';

import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from '../components/Home';
import Main from '../components/Main';

class SideMenuClass extends Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
    this._previousLeft = 150;
    this._previousTop = 200;
    this._squareStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
      }
    };

    console.log("*****************************HELLLLLLOOOO")
    this._highlight();
    console.log("*****************************GOOOOODBYEEEE")
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={this.props.style}>
        <View
          ref={(square) => {
            this.square = square;
          }}
          style={styles.square}
          {...this._panResponder.panHandlers}>
        </View>
      </View>
    )
  }

  _highlight() {
    console.log("*****************************HIGHLIGHTINGGGGGG")
    this._squareStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight() {
    console.log("*****************************UNNNHIGHLIGHTINGGGGGG")
    this._squareStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }

  _updateNativeStyles() {
    this.square && this.square.setNativeProps(this._squareStyles);
  }

  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the square?
    return true;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the square?
    return true;
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    console.log("*****************************PanResponder GRANT")
    this._highlight();
  }
  _handlePanResponderMove(e: Object, gestureState: Object) {
    console.log("*****************************PanResponder MOVE")
    this._squareStyles.style.left = this._previousLeft + gestureState.dx;
    this._squareStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  }
  _handlePanResponderEnd(e: Object, gestureState: Object) {
    console.log("*****************************PanResponder END")
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }
}

var styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: 'green',
    left: 150,
    top: 200,
  },
});

export default SideMenuClass;
