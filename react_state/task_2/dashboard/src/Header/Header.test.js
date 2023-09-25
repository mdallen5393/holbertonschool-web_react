import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  // Test that Header renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Header renders img and h1 tags
  it('renders img and h1 tags', () => {
    wrapper.update();
    const imgItems = wrapper.find('img');
    expect(imgItems.exists()).toBe(true);

    const h1Items = wrapper.find('h1');
    expect(h1Items.exists()).toBe(true);
  });

  // Test that the Header doesn't render logout when not logged in
  it('does not render logout when the user is not logged in', () => {
    const user = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    const logOut = () => {};

    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  // Test that the Header renders the logout when logged in
  it('renders logout when the user is logged in', () => {
    const user = {
      email: 'test@test.com',
      password: 'password',
      isLoggedIn: true,
    };
    const logOut = () => {};

    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  // Test that the Header calls the logOut function when clicked
  it('calls logOut function when logout link is clicked', () => {
    const user = {
      email: 'test@test.com',
      password: 'password',
      isLoggedIn: true,
    };
    const logOut = jest.fn();

    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
