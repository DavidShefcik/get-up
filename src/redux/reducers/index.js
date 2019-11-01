/*
 * Author: David Shefcik
 * Project: GetUpp App
 */

//  Module imports
import {combineReducers} from 'redux';

// Action import
import {FIRST_LAUNCH_SEEN, RESET_LAUNCH_STATE, SET_PAGE} from '../actions';

// Initial state
const initialState = {
  firstLaunchState: true,
  currentPage: 'clock',
};

// First launch reducer function
const firstLaunchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_LAUNCH_SEEN:
      return {
        firstLaunchState: action.payload,
      };
    case RESET_LAUNCH_STATE:
      return {
        firstLaunchState: true,
      };
    default:
      return state;
  }
};

// Page reducer
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        currentPage: action.payload,
      };
    default:
      return {
        currentPage: state['currentPage'],
      };
  }
};

const rootReducer = combineReducers({
  firstLaunch: firstLaunchReducer,
  page: pageReducer,
});

// Export
export default rootReducer;
