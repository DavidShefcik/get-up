/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';

// Component imports
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReactNativeAN from 'react-native-alarm-notification';

// Component
class AlarmItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.alarm,
      time: '',
      deleted: false,
    };
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    let fireDateString = moment(
      this.state.info.fire_date,
      'DD-MM-YYYY HH:mm:ss',
    ).format('h:mm A');
    this.setState({
      time: fireDateString,
    });
  }
  delete() {
    ReactNativeAN.deleteAlarm(this.state.info.id);
    this.setState({
      deleted: true,
    });
  }
  render() {
    return (
      <View
        style={[
          !this.state.deleted ? styles.alarmItem : styles.alarmItemDeleted,
        ]}>
        <Text style={styles.text}>{this.state.time}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={this.delete}>
          <Icon name="close" color="#d91111" size={35} />
        </TouchableOpacity>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  alarmItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    borderColor: '#454545',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  alarmItemDeleted: {
    display: 'none',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
});

// Export
export default AlarmItem;
