import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<Notifications />);
  });

  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders three list items
  it('renders three list items', () => {
    wrapper.update();
    const listItems = wrapper.find('NotificationItem');
    expect(listItems.length).toBe(3);
  });

  // Test that Notifications renders the correct text
  it('renders the correct text', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toEqual('Here is the list of notifications');
  });

  // Test that Notifications renders the correct NotificationItem
  it('renders the first NotificationItem html correctly', () => {
    wrapper.update();
    expect(wrapper.html()).toContain('<div class=\"Notifications\"><img src=\"test-file-stub\" alt=\"close icon\" style=\"height: 15px; position: absolute; top: 10px; right: 10px;\" aria-label=\"Close\"><p>Here is the list of notifications</p><ul><li data-notification-type=\"default\">New course available</li><li data-notification-type=\"urgent\">New resume available</li><li data-notification-type=\"urgent\"><strong>Urgent requirement</strong> - complete by EOD</li></ul></div>');
  });
});