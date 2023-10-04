import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('returns the initial state when the SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('returns updates the property isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.isNotificationDrawerVisible).toBe(true);
  });
});