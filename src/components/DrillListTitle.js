import React from 'react';
import PropTypes from 'prop-types';

const DrillListTitle = (props) => {
  // child of: NewRoutineRender
  return (
    <li key={props.id}>+ {props.title}</li> 
   );
}

DrillListTitle.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default DrillListTitle;
