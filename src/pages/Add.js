/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';

// Component imports
import AddBack from '../components/addBack';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import ReactNativeAN from 'react-native-alarm-notification';

// Component
class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTimePickerVisible: false,
      endTimePickerVisible: false,
      setAmountVisible: false,
      startTime: 'Select Start Alarm Time',
      endTime: 'Select End Alarm Time',
      startTimeValue: null,
      endTimeValue: null,
      amountValue: 0,
      buttonClickable: false,
      valid: false,
      error: '',
      createText: 'Create',
    };

    this.handleStartPicker = this.handleStartPicker.bind(this);
    this.showStartPicker = this.showStartPicker.bind(this);
    this.hideStartPicker = this.hideStartPicker.bind(this);
    this.handleEndPicker = this.handleEndPicker.bind(this);
    this.showEndPicker = this.showEndPicker.bind(this);
    this.hideEndPicker = this.hideEndPicker.bind(this);
    this.checkTimes = this.checkTimes.bind(this);
    this.cancel = this.cancel.bind(this);
    this.create = this.create.bind(this);
  }
  handleStartPicker(data) {
    this.setState({
      startTimeValue: data,
    });
    this.checkTimes();
    this.hideStartPicker();
  }
  showStartPicker() {
    this.setState({
      startTimePickerVisible: true,
    });
  }
  hideStartPicker() {
    this.setState({
      startTimePickerVisible: false,
    });
  }
  handleEndPicker(data) {
    this.setState({
      endTimeValue: data,
    });
    this.checkTimes();
    this.hideEndPicker();
  }
  showEndPicker() {
    this.setState({
      endTimePickerVisible: true,
    });
  }
  hideEndPicker() {
    this.setState({
      endTimePickerVisible: false,
    });
  }
  checkTimes() {
    let startTime;
    let endTime;
    if (this.state.startTimeValue) {
      startTime = moment(this.state.startTimeValue, 'HH:mm:ss');
      this.setState({
        startTime: 'Start alarms at ' + startTime.format('h:mm a').toString(),
      });
    }
    if (this.state.endTimeValue) {
      endTime = moment(this.state.endTimeValue, 'HH:mm:ss');
      this.setState({
        endTime: 'End alarms at ' + endTime.format('h:mm a').toString(),
      });
    }

    if (startTime && endTime) {
      this.setState({
        startTime: 'Start alarms at ' + startTime.format('h:mm a').toString(),
        endTime: 'End alarms at ' + endTime.format('h:mm a').toString(),
        valid: true,
      });
    }
  }
  cancel() {
    this.props.navigation.navigate('Alarms');
  }
  create() {
    if (this.state.valid) {
      if (this.state.amountValue > 0) {
        this.setState({
          createText: 'Creating...',
        });
        let alarms = [];

        let startTime = this.state.startTimeValue;
        let endTime = this.state.endTimeValue;
        let amountValue = this.state.amountValue;

        let startTimeMoment = moment(startTime).unix();
        let endTimeMoment = moment(endTime).unix();

        if (endTimeMoment < startTimeMoment) {
          endTimeMoment = moment(endTime)
            .add(1, 'days')
            .unix();
        }

        let differenceInMin = moment
          .duration(moment(endTime).diff(startTime))
          .asMinutes();

        let distanceBetween;

        if (differenceInMin < 9 && amountValue > differenceInMin) {
          amountValue = differenceInMin;
          distanceBetween = amountValue;
        } else {
          distanceBetween = distanceBetween = Math.round(
            (endTimeMoment - startTimeMoment) / amountValue,
          );
        }

        let time = startTimeMoment;

        for (let x = 0; x < amountValue; x++) {
          time += distanceBetween;
          alarms.push(time);
        }

        for (let i = 0; i < alarms.length; i++) {
          let id = Math.round(Math.random() * 201).toString();
          let fireDate = ReactNativeAN.parseDate(
            moment.unix(alarms[i]).toDate(),
          );
          let alarmData = {
            id: id,
            title: 'Get Up Alarm',
            message: 'Get Up!',
            channel: 'getup',
            small_icon: 'ic_launcher',
            fire_date: fireDate,
            data: {
              date: moment.unix(alarms[i]),
              time: new Date(alarms[i]).toUTCString(),
            },
          };
          ReactNativeAN.scheduleAlarm(alarmData);
        }

        this.setState({
          error: '',
          createText: 'Create',
        });
        this.props.navigation.navigate('Alarms');
      } else {
        this.setState({
          error: 'You need to set an amount of alarms!',
        });
      }
    } else {
      this.setState({
        error: 'Alarm times are not valid!',
      });
    }
  }
  render() {
    return (
      <View style={styles.page}>
        <AddBack />
        <View style={styles.infoSection}>
          <TouchableOpacity
            onPress={this.showStartPicker}
            activeOpacity={0.8}
            style={styles.valueToggle}>
            <Text style={styles.valueToggleText}>{this.state.startTime}</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.startTimePickerVisible}
            onConfirm={this.handleStartPicker}
            onCancel={this.hideStartPicker}
            mode="time"
            is24Hour={false}
          />

          <TouchableOpacity
            onPress={this.showEndPicker}
            activeOpacity={0.8}
            style={styles.valueToggle}>
            <Text style={styles.valueToggleText}>{this.state.endTime}</Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.endTimePickerVisible}
            onConfirm={this.handleEndPicker}
            onCancel={this.hideEndPicker}
            mode="time"
            is24Hour={false}
          />

          <RNPickerSelect
            onValueChange={value => this.setState({amountValue: value})}
            style={styles}
            placeholder={{
              label: 'Amount of Alarms',
              color: '#fff',
              value: 0,
            }}
            Icon={() => {
              return <View />;
            }}
            items={[
              {label: '1', value: 1},
              {label: '2', value: 2},
              {label: '3', value: 3},
              {label: '4', value: 4},
              {label: '5', value: 5},
              {label: '6', value: 6},
              {label: '7', value: 7},
              {label: '8', value: 8},
              {label: '9', value: 9},
            ]}
          />

          <View style={styles.errorArea}>
            <Text style={styles.error}>{this.state.error}</Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={this.cancel}
            activeOpacity={0.8}
            style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.create}
            activeOpacity={0.8}
            style={styles.createButton}>
            <Text style={styles.createButtonText}>{this.state.createText}</Text>
          </TouchableOpacity>
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
  infoSection: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  valueToggle: {
    marginHorizontal: 30,
    backgroundColor: '#1998cf',
    borderWidth: 1,
    borderColor: '#126e96',
    width: 225,
    alignItems: 'center',
    borderRadius: 3,
    padding: 10,
    marginVertical: 8,
  },
  valueToggleText: {
    color: 'white',
  },
  viewContainer: {
    width: '60%',
    alignSelf: 'center',
  },
  errorArea: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  error: {
    color: '#d91111',
  },
  buttonArea: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    bottom: 50,
  },
  cancelButton: {
    marginHorizontal: 30,
    backgroundColor: '#d91111',
    borderWidth: 1,
    borderColor: '#a80d0d',
    width: 100,
    alignItems: 'center',
    borderRadius: 3,
    padding: 10,
  },
  cancelButtonText: {
    color: 'white',
  },
  createButton: {
    marginHorizontal: 30,
    backgroundColor: '#0ac749',
    borderWidth: 1,
    borderColor: '#26ad53',
    width: 100,
    alignItems: 'center',
    borderRadius: 3,
    padding: 10,
  },
  createButtonText: {
    color: 'white',
  },
});

// Export
export default AddPage;
