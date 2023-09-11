import './App.css';
import React from 'react';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}


export default App;
