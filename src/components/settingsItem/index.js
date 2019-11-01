/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Component
class SettingsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.state.info.action}
        activeOpacity={0.8}
        style={styles.listItem}>
        <Text style={styles.text}>{this.state.info.text}</Text>
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderColor: '#454545',
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

// Export
export default SettingsItem;
