import React from 'react';
import PropTypes from 'prop-types';

const RoutinesTitleSelect = (props) => {

  return (

  	<form>
  	<select value={props.routineTitle} onChange={(e) => props.updateRoutineTitle(e)}>
	  	{ props.titlesForSelect.map((title, index) => {
	  	  return <option key={index} value={title}>{title}</option>
	  	}) }
  	</select>
  	</form>

  );
}

RoutinesTitleSelect.contextTypes = {
  router: React.PropTypes.object
}

RoutinesTitleSelect.propTypes = {
  routineTitle: PropTypes.string.isRequired,
  titlesForSelect: PropTypes.array.isRequired
}

export default RoutinesTitleSelect;
