import React from 'react';

const RoutineListItem = (props) => {
  // child of: RoutinesRender

  const { details } = props;
  const title = <a data-id={details.id} data-title={details.title} onClick={ (e) => props.goToRoutine(e)}>{details.title}</a>
  const deleteButton = <button className="btn-danger" data-id={details.id} onClick={(e) => props.deleteRoutine(e)}>Delete</button>
  //const viewButton = <button data-id={details.id} data-title={details.title} onClick={(e) => goToRoutine(e)}>View</button>

  return (
    <li key={props.id}><span className="wrapper dropShadow">{title} {deleteButton}</span></li>
   );
}

RoutineListItem.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineListItem;
