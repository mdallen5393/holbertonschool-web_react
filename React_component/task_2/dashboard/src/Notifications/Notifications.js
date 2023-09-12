import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div id='container'>
        <div className='menuItem'>
          Your notifications
        </div>
        {displayDrawer && (
          <div className='Notifications'>
            <img src={closeIcon} alt='close icon'
              style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
              aria-label='Close'
              onClick={this.handleButtonClick}
            ></img>

            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ type, html, value, id }) => (
                  <NotificationItem key={id} type={type} html={html} value={value} />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
};


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
