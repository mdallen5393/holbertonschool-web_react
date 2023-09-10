import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return <>
    <div className='Notifications'>
      <img src={closeIcon} alt='close icon'
        style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
        aria-label='Close'
        onclick='console.log("Close button has been clicked")'
      ></img>

      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  </>
};
