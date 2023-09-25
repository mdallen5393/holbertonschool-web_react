import notifications from '../../notifications.json';

function getAllNotificationsByUser(userId) {
  const userNotifications = notifications.filter(notification => notification.author.id === userId);
  const userContexts = userNotifications.map(notification => notification.context);
  return userContexts;
};

export default getAllNotificationsByUser;