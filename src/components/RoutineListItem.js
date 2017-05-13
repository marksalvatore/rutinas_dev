import React from 'react';
import PropTypes from 'prop-types';

const RoutineListItem = (props) => {
  // child of: RoutinesRender

  const { details } = props;
  const title = <a data-id={details.id} data-title={details.title} onClick={ (e) => props.goToRoutine(e)}>{details.title}</a>
  const deleteButton = <button className="btn-danger" data-id={details.id} onClick={(e) => props.deleteRoutine(e)}>Delete</button>
  //const viewButton = <button data-id={details.id} data-title={details.title} onClick={(e) => goToRoutine(e)}>View</button>

  return (
    <li><span className="wrapper dropShadow">{title} {deleteButton}</span></li>
   );
}

RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

RoutineListItem.propTypes = {
	deleteRoutine: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
	goToRoutine: PropTypes.func.isRequired
}

export default RoutineListItem;
