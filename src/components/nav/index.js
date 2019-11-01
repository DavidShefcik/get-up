/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

// Component imports
import NavBarItem from '../navBarItem';

// NavBar Component
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'clock',
      items: [
        {
          icon: 'bell-ring',
          page: 'alarms',
        },
        {
          icon: 'clock',
          page: 'clock',
          middle: true,
        },
        {
          icon: 'settings',
          page: 'settings',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.navBar}>
        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={({item}) => <NavBarItem item={item} key={item.page} />}
          keyExtractor={item => item.page}
          numColumns={3}
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopColor: '#454545',
    borderTopWidth: 1,
    height: 45,
  },
  list: {
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});

// Export
export default NavBar;
