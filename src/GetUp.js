/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import NavigationService from './NavigationService';

// Component imports
import AppContainer from './AppContainer';
import NavBar from './components/nav';

// Map state to props
const mapStateToProps = state => {
  const {firstLaunch, page} = state;
  return {firstLaunch, page};
};

// Component component
class GetUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: <View />,
    };
    this.checkLaunch = this.checkLaunch.bind(this);
  }
  checkLaunch() {
    if (!this.props.firstLaunch.firstLaunchState) {
      this.setState({
        bar: <NavBar />,
      });
    } else {
      this.setState({
        bar: <View />,
      });
    }
  }
  componentDidMount() {
    this.checkLaunch();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.firstLaunch.firstLaunchState !=
      this.props.firstLaunch.firstLaunchState
    ) {
      this.checkLaunch();
    }
  }
  render() {
    return (
      <React.Fragment>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        {this.state.bar}
      </React.Fragment>
    );
  }
}

// Export
export default connect(mapStateToProps)(GetUp);
