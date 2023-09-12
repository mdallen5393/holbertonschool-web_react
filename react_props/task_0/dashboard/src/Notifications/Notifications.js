import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

const Notifications = ({ displayDrawer }) => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }

  return <>
    <div className='menuItem'>
      Your notifications
    </div>
    {displayDrawer && (
      <div className='Notifications'>
        <img src={closeIcon} alt='close icon'
          style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
          aria-label='Close'
          onClick={handleButtonClick}
        ></img>

        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    )}
  </>
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
