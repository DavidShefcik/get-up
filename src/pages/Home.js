/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

// Map state to props
const mapStateToProps = state => {
  const {firstLaunch} = state;
  return {firstLaunch};
};

// Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
  }
  componentDidMount() {
    this.check();
  }
  componentDidUpdate(prevProps) {
    let firstLaunch = this.props.firstLaunch.firstLaunchState;
    if (prevProps.firstLaunch.firstLaunchState != firstLaunch) {
      this.check();
    }
  }
  check() {
    if (this.props.firstLaunch.firstLaunchState) {
      this.props.navigation.navigate('FirstLaunch');
    } else {
      this.props.navigation.navigate('Clock');
    }
  }
  render() {
    return <View></View>;
  }
}

// Export
export default connect(mapStateToProps)(Home);
