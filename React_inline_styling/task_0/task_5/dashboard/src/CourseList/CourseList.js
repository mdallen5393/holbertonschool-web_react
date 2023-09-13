import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const CourseList = ({ listCourses = [] }) => {
  return (
    <BodySectionWithMarginBottom title='Course list'>
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={String(course.credit)} isHeader={false} />
            ))
          )}
        </tbody>
      </table>
    </BodySectionWithMarginBottom>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
