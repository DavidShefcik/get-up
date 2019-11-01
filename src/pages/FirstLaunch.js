/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Imports
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {setFirstLaunchSeen, setPage} from '../redux/actions';

// Map state to props
const mapStateToProps = state => {
  let firstLaunchState = state.firstLaunch.firstLaunchState;
  return {firstLaunchState};
};

// Component
class FirstLaunch extends React.Component {
  constructor(props) {
    super(props);
    this.firstLaunchDismiss = this.firstLaunchDismiss.bind(this);
  }
  firstLaunchDismiss() {
    this.props.setFirstLaunchSeen(false);
    this.props.setPage('clock');
  }
  render() {
    return (
      <View style={styles.initialView}>
        <Text style={styles.firstWelcomeText}>Get Up.</Text>
        <Text style={styles.welcomeSubtitle}>
          Get Up will make sure you get up.
        </Text>
        <Text style={styles.description}>
          Several alarms at once. A puzzle to shut them off. Good luck hitting
          snooze.
        </Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={this.firstLaunchDismiss}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.authorText}>David Shefcik</Text>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  initialView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151613',
    justifyContent: 'space-between',
  },
  firstWelcomeText: {
    color: 'white',
    fontSize: 36,
    marginTop: '30%',
  },
  welcomeSubtitle: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: '10%',
  },
  description: {
    color: 'white',
    paddingHorizontal: 15,
    textAlign: 'center',
    marginVertical: '15%',
  },
  button: {
    width: '50%',
    padding: 10,
    backgroundColor: '#62c162',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#62c162',
    marginBottom: '10%',
  },
  buttonText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  authorText: {
    color: 'white',
    textAlign: 'left',
    width: '95%',
    paddingBottom: '2%',
  },
});

// Export
export default connect(
  mapStateToProps,
  {setFirstLaunchSeen, setPage},
)(FirstLaunch);
