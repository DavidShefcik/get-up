/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

// Component imports
import SettingsBack from '../components/settingsBack';
import AboutItem from '../components/aboutItem';
import Link from '../components/Link';

// Component
class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'why',
          question: 'Why was this app made?',
          answer: (
            <Text style={styles.answer}>
              This app was made as a submission for the 2019 Congressional App
              Challenge. I made this app because I would have a hard time
              getting up in the morning if I didn't have a couple of alarms
              going off at once. When I would try to set multiple alarms at once
              it was inconvenient and didn't do what I wanted. I wanted a couple
              of alarms to go off within the same minute. So, since I was
              learning React Native, I decided to try and make this app.
            </Text>
          ),
        },
        {
          name: 'who',
          question: 'Who made it?',
          answer: <Text style={styles.answer}>David Shefcik</Text>,
        },
        {
          name: 'github',
          question: 'Is there a GitHub repository?',
          answer: <Link url="https://www.github.com/DavidShefcik/get-up" />,
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.page}>
        <SettingsBack />
        <View>
          <Text style={styles.title}>About Get Up</Text>
          <FlatList
            style={styles.settingsList}
            data={this.state.items}
            renderItem={({item}) => <AboutItem info={item} />}
            keyExtractor={item => item.name}
          />
        </View>
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
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginVertical: 15,
  },
  answer: {
    color: 'white',
    marginHorizontal: 20,
    marginBottom: 5,
  },
});

// Export
export default AboutPage;
