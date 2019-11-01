/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

// Component imports
import Clock from '../components/clock';

// Component
class ClockPage extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Clock />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#151613',
  },
});

// Export
export default ClockPage;
