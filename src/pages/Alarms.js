/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
var sort = require('array-sort');

// Component imports
import AddAlarm from '../components/addAlarm';
import AlarmItem from '../components/alarmItem';
import ReactNativeAN from 'react-native-alarm-notification';

// Component
class AlarmsPage extends Component {
  newAlarms = [''];
  constructor(props) {
    super(props);
    this.state = {
      alarms: [],
    };
    this.getAlarms = this.getAlarms.bind(this);
    this.compareArrays = this.compareArrays.bind(this);
  }
  componentDidMount() {
    this.getAlarms();
  }
  componentDidUpdate() {
    if (!this.compareArrays(this.state.alarms, this.newAlarms)) {
      this.getAlarms();
    }
  }
  async getAlarms() {
    var a = [];
    let alarmData = await ReactNativeAN.getScheduledAlarms();
    alarmData.map(alarm => {
      this.newAlarms.push(alarm);
      a.push(alarm);
    });
    if (this.newAlarms[0] === '') {
      this.newAlarms.splice(0);
    }
    this.newAlarms = a;
    this.setState({
      alarms: a,
    });
  }
  compareArrays(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i++) {
      if (first[i] != second[i]) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <View style={styles.page}>
        <AddAlarm />
        <FlatList
          data={this.state.alarms}
          keyExtractor={item => item.id}
          renderItem={({item}) => <AlarmItem alarm={item} />}
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
  text: {
    color: 'black',
  },
});

// Export
export default AlarmsPage;
