import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.default}>
        <Text>
          Main!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    flex: 1
  },
});

export default Main;
