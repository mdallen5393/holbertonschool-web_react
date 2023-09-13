import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection title={title} children={children}/>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes,
};

export default BodySectionWithMarginBottom;
