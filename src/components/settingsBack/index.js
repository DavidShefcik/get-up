/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import NavigationService from '../../NavigationService';

// Component imports
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Component
class SettingsBack extends Component {
  goBack() {
    NavigationService.navigate('Settings');
  }
  render() {
    return (
      <TouchableOpacity style={styles.back} opacity={0.8} onPress={this.goBack}>
        <Icon
          style={styles.backArrow}
          name="arrow-left"
          size={25}
          color="#1998cf"
        />
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  back: {
    height: 25,
    margin: 10,
  },
  backArrow: {
    width: '100%',
  },
});

// Export
export default SettingsBack;
