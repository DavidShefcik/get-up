/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, Text, AppRegistry, Platform, StyleSheet} from 'react-native';
import moment from 'moment';

// Component
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
      currentDate: null,
      AMPM: null,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: moment().format('h:mm:ss'),
        currentDate: moment().format('dddd, MMMM Do, YYYY'),
        AMPM: moment()
          .format('a')
          .toUpperCase(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <View style={styles.clock}>
        <View style={styles.timeArea}>
          <Text style={styles.time}>{this.state.currentTime}</Text>
          <Text style={styles.ampm}>{this.state.AMPM}</Text>
        </View>
        <Text style={styles.date}>{this.state.currentDate}</Text>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  clock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeArea: {
    flexDirection: 'row',
  },
  time: {
    color: 'white',
    fontSize: 30,
  },
  ampm: {
    color: '#1d65b8',
    fontSize: 30,
    paddingLeft: 5,
  },
  date: {
    color: 'white',
    fontSize: 18,
    paddingTop: 10,
  },
});

// Export
export default Clock;
