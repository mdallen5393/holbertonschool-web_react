import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('returns the data passed when the FETCH_COURSE_SUCCESS action is used', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    };
    const expectedState = action.data.map(course => ({
      ...course,
      isSelected: false,
    }));
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('returns the data with the correct item updated when the UNSELECT_COURSE action is used', () => {
  
  });
});