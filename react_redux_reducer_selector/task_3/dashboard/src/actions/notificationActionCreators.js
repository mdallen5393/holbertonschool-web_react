import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { bindActionCreators } from 'redux';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export function setTypeFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};


export const boundNotificationsActionCreators = bindActionCreators(
  {
    markAsRead,
    setTypeFilter,
  }
);
