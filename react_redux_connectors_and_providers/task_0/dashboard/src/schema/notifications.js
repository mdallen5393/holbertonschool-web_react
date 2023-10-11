import * as data from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(data.default, [notification]);

function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const userNotifications = Object.values(notifications).filter(notification => notification.author === userId);
  const userContexts = userNotifications.map(notification => messages[notification.context]);
  return userContexts;
};

export default getAllNotificationsByUser;
