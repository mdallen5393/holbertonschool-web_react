import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

import { useDispatch } from 'react-redux';
import fetch from 'node-fetch';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function useCourseActions() {
  const dispatch = useDispatch();
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(unselectCourse()),
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    loginSuccess: () => dispatch(loginSuccess()),
    loginFailure: () => dispatch(loginFailure()),
  };
}

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch('/login-success.json');

      if (response.ok) {
        dispatch(loginSuccess());
      }
      throw new Error('Login failed');
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}
