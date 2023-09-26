import { SELECT_COURSE } from "./courseActionTypes";
import { UNSELECT_COURSE } from "./courseActionTypes";
import { useDispatch } from 'react-redux';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export function useCourseActions() {
  const dispatch = useDispatch();
  return {
    selectCourse: (index) => dispatch(selectCourse(index)),
    unselectCourse: (index) => dispatch(unselectCourse(index)),
  };
}
