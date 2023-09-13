import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

// create listNotifications array
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: undefined },
  { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
  { id: 3, type: 'urgent', value: undefined, html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }},
];

// create listCourses array
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = (event) => {
    console.log('A key was pressed', event.key);
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn, logOut } = this.props;
    // Added key={this.props.isLoggedIn} to force re-render of Notifications component
    //  This is only necessary because we have the shouldComponentUpdate method in notifications for a different task
    // Also added displayDrawer={isLoggedIn} to tie notifications to isLoggedIn
    return (
      <>
        <div className='header'>
          <Notifications key={this.props.isLoggedIn} listNotifications={listNotifications} displayDrawer={isLoggedIn} />
          <Header />
        </div>
        <div className='App-body'>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <BodySection title='News from the School'>
            <p>Today, we mourn the loss of a C22 student who dared make a function with 41 lines. The ghost of Betty Holberton has now claimed the lives of 69 students in the last...</p>
          </BodySection>
        </div>
        <Footer />
      </>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
