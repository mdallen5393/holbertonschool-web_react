import logo from '../assets/logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <div className={`App-header ${css(styles.appHeader)}`}>
        <img src={logo} className={`App-logo ${css(styles.appLogo)}`} alt="logo" />
        <h1 className={`title ${css(styles.title)}`}>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        )}
      </div>
    );
  };
};

Header.contextType = AppContext;

const styles = StyleSheet.create({
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },

  appHeader: {
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },

  title: {
    color: 'rgb(224,53,75)',
  },
})

export default Header;
