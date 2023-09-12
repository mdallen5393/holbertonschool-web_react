import './App.css';
import React from 'react';
import PropTypes from 'prop-types';


// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


const App = ({ isLoggedIn }) => {
  return (
    <>
      <div className='header'>
        <Notifications />
        <Header />
      </div>
      <div className='App-body'>
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <Footer />
    </>
  );
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
