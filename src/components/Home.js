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
    flex: 1
  },
});

export default Home;
