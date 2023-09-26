import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { useDispatch } from 'react-redux';

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

export function useCourseActions() {
  const dispatch = useDispatch();
  return {
    markAsRead: (index) => dispatch(markAsRead(index)),
    setTypeFilter: (filter) => dispatch(setTypeFilter(filter)),
  };
}
