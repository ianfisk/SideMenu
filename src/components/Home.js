import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.default}>
        <Text>
          Home!
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
    width: 100,
    height: 100
  },
});

export default Home;
