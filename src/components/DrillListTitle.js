import React from 'react';
import PropTypes from 'prop-types';

const DrillListTitle = ({ title }) => {
  // child of: NewRoutineRender
  return (
    <li>+ {title}</li> 
   );
}

DrillListTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default DrillListTitle;
