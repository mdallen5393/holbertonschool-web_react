import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

import { Map } from 'immutable';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {

    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true);
    }

    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false);
    }

    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }

    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }

    default:
      return state;
  }
}
