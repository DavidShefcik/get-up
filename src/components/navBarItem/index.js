/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import NavigationService from '../../NavigationService';
import {connect} from 'react-redux';

// Redux imports
import {setPage} from '../../redux/actions';

// Component imports
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Map state to props
const mapStateToProps = state => {
  const {currentPage} = state.page;
  return {currentPage};
};

// Component
class NavBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInfo: props.item,
      color: '#fff',
    };
    this.changePage = this.changePage.bind(this);
    this.checkColor = this.checkColor.bind(this);
  }
  componentDidMount() {
    this.checkColor();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentPage != this.props.currentPage) {
      this.checkColor();
    }
  }
  checkColor() {
    if (this.props.currentPage === this.state.itemInfo.page) {
      this.setState({
        color: '#1d65b8',
      });
    } else {
      this.setState({
        color: '#fff',
      });
    }
  }
  changePage() {
    this.props.setPage(this.state.itemInfo.page);
    this.checkColor();
    let pageName =
      this.state.itemInfo.page.charAt(0).toUpperCase() +
      this.state.itemInfo.page.slice(1).toLowerCase();
    NavigationService.navigate(pageName);
  }
  changeColor() {
    if (this.state.itemInfo.current) {
      this.setState({
        color: '#1998cf',
      });
    } else {
      this.setState({
        color: '#fff',
      });
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.changePage}
        activeOpacity={0.8}
        style={[
          this.state.itemInfo.middle
            ? styles.navBarItemMiddle
            : styles.navBarItem,
        ]}>
        <View>
          <Icon
            name={this.state.itemInfo.icon}
            size={25}
            color={this.state.color}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  navBarItem: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  navBarItemMiddle: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderLeftColor: '#454545',
    borderLeftWidth: 1,
    borderRightColor: '#454545',
    borderRightWidth: 1,
  },
  navBarItemName: {
    color: 'white',
  },
});

// Export
export default connect(
  mapStateToProps,
  {setPage},
)(NavBarItem);
