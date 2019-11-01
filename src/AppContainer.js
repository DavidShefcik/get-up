/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Imports
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Pages
import Home from './pages/Home';
import AlarmsPage from './pages/Alarms';
import ClockPage from './pages/Clock';
import SettingsPage from './pages/Settings';
import AboutPage from './pages/About';
import FirstLaunch from './pages/FirstLaunch';
import AddPage from './pages/Add';

// App container
const RootStack = createStackNavigator(
  {
    Home: {screen: Home},
    Clock: {screen: ClockPage},
    Alarms: {screen: AlarmsPage},
    Settings: {screen: SettingsPage},
    About: {screen: AboutPage},
    FirstLaunch: {screen: FirstLaunch},
    Add: {screen: AddPage},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
);
const AppContainer = createAppContainer(RootStack);

// Exports
export default AppContainer;
