import React from 'react';
import { mount } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<CourseList />);
  });

  // Test that CourseList renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that CourseList renders five different rows
  it('renders three list items', () => {
    wrapper.update();
    const listItems = wrapper.find('tr');
    expect(listItems.length).toBe(5);
  });
});