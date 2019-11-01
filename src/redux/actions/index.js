/*
 * Author: David Shefcik
 * Project: GetUp App
 */

//  Types
export const FIRST_LAUNCH_SEEN = 'FIRST_LAUNCH_SEEN';
export const RESET_LAUNCH_STATE = 'RESET_LAUNCH_STATE';
export const SET_PAGE = 'SET_PAGE';

// Actions
// Set first launch seen
export const setFirstLaunchSeen = payload => dispatch => {
  dispatch({
    type: FIRST_LAUNCH_SEEN,
    payload,
  });
};

// Reset first launch
export const resetFirstLaunchSeen = payload => dispatch => {
  dispatch({
    type: RESET_LAUNCH_STATE,
    payload,
  });
};

// Set page
export const setPage = payload => dispatch => {
  dispatch({
    type: SET_PAGE,
    payload,
  });
};
