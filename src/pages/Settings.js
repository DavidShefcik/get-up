/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

// Component imports
import SettingsItem from '../components/settingsItem';

// Component
class SettingsPage extends Component {
  static nav;
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'about',
          text: 'About',
          action: this.about,
        },
      ],
    };
    this.about = this.about.bind(this);
  }
  componentDidMount() {
    SettingsPage.nav = this.props.navigation;
  }
  about() {
    SettingsPage.nav.navigate('About');
  }
  render() {
    return (
      <View style={styles.page}>
        <FlatList
          style={styles.settingsList}
          data={this.state.items}
          renderItem={({item}) => <SettingsItem info={item} />}
          keyExtractor={item => item.name}
        />
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
  settingsList: {
    marginVertical: 5,
  },
});

// Export
export default SettingsPage;
