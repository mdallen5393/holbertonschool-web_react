import './App.css';
import React from 'react';
import PropTypes from 'prop-types';


// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn=false }) {
  return (
    <>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}


export default App;
