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
class AddAlarm extends Component {
  constructor(props) {
    super(props);
    this.openAddPage = this.openAddPage.bind(this);
  }
  openAddPage() {
    NavigationService.navigate('Add');
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.openAddPage}
        style={styles.bubble}
        activeOpacity={0.8}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  bubble: {
    width: 65,
    height: 65,
    backgroundColor: '#1998cf',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
});

// Export
export default AddAlarm;
