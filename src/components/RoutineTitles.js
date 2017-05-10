import React from 'react';
import PropTypes from 'prop-types';

const RoutineTitles = (props) => {
  /* called by NewRoutineRender */

  return (
  	<form className="wrapper">
  	<select value={props.routineTitle} onChange={(e) => props.updateRoutineTitle(e)}>
	  	{ props.titlesForSelect.map((title, index) => {
	  	  return <option key={index} value={title}>{title}</option>
	  	}) }
  	</select>
  	</form>
  );
}

RoutineTitles.contextTypes = {
  router: React.PropTypes.object
}

RoutineTitles.propTypes = {
  routineTitle: PropTypes.string.isRequired,
  titlesForSelect: PropTypes.array.isRequired,
  updateRoutineTitle: PropTypes.func.isRequired
}

export default RoutineTitles;
