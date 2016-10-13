import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Menu extends Component {
  render() {
    return (
      <View style={styles.default}>
        <TouchableHighlight onPress={() => this.props.onPress("main")}>
          <Text>
            Main
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.onPress("home")}>
          <Text>
            Home
          </Text>
        </TouchableHighlight>
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

export default Menu;
