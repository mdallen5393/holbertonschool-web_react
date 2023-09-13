import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/>
    );
  }
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
  );
};

NotificationItem.propTypes = {
  ...NotificationItemShape.propTypes,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
