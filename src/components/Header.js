import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.default}>
      <TouchableHighlight
        style={{width: 75, height: 75, justifyContent: 'center', alignItems: 'center',}}
        onPress={() => props.onPress()}>
        <Text>
          {props.title}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    height: 75
  },
});

export default Header;
