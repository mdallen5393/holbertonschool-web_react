import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(Map(initialState));
  });

  it('returns the initial state when the SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(Map(initialState));
  });

  it('updates the property isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });
});
