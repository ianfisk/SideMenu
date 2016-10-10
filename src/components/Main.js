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
          Menu!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
});

export default Main;
