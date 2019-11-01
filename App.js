/*
 * Author: David Shefcik
 * Project: GetUp App
 */

// Module imports
import React from 'react';
import * as devMenu from 'react-native-dev-menu';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';

// Redux imports
import {store, persistor} from './src/redux/store';
import {resetFirstLaunchSeen} from './src/redux/actions';
import {PersistGate} from 'redux-persist/integration/react';

// Component imports
import GetUp from './src/GetUp';

// Dev menu item for clearing redux
if (__DEV__) {
  devMenu.addItem('Reset Home View', () => {
    store.dispatch(resetFirstLaunchSeen());
    console.log('Reset home view.');
  });
  devMenu.addItem('Current Home View', () => {
    Alert.alert(
      'Current first launch value: ' +
        JSON.stringify(store.getState().firstLaunch),
    );
  });
}

// App Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GetUp />
        </PersistGate>
      </Provider>
    );
  }
}

// Export
export default App;
