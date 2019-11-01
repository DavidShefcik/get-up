/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';

// Component
class Link extends Component {
  constructor(props) {
    super(props);
    this.openLink = this.openLink.bind(this);
  }
  openLink() {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      }
    });
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.openLink}>
        <Text style={styles.link}>{this.props.url}</Text>
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  link: {
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
    marginHorizontal: 20,
  },
});

// Export
export default Link;
