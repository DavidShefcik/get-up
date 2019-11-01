/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Component
class AboutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.info,
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.question}>{this.state.item.question}</Text>
        {this.state.item.answer}
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  question: {
    color: '#1998cf',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

// Export
export default AboutItem;
