import React from 'react';
import PropTypes from 'prop-types';

const DrillListItem = (props) => {
  // child of: RoutineDetails

  const { details } = props;

  if( details ) {
    const title = <a data-id={details.id} onClick={(e) => props.goToScore(e)}>{details.title}</a>

    const deleteButton = <button className="btn-danger" data-id={details.id} onClick={(e) => props.deleteDrill(e)}>Delete</button>
    const historyButton = <button className="btn-secondary" data-id={details.id} onClick={(e) => props.goToHistory(e)}>History</button>
    const setupButton = <button className="btn-secondary" data-id={details.id} onClick={(e) => props.goToSetup(e)}>Setup</button>
    const scoreButton = <button className="btn-primary"data-id={details.id} onClick={(e) => props.goToScore(e)}>Score</button>

    return (
      <li key={props.id}>
        <span className="wrapper">
          <div className="container dropShadow">
            <div className="title">{title}</div>
            <div className="controls">{scoreButton} {setupButton} {historyButton} {deleteButton}</div>
          </div>
        </span>
      </li>
     );

  } else {
    return (
       <p>There are no drills in this routine.</p>
     );
  }

}

DrillListItem.propTypes = {
  deleteDrill: PropTypes.func,
  details: PropTypes.object.isRequired,
  goToHistory: PropTypes.func,
  goToScore: PropTypes.func,
  goToSetup: PropTypes.func,
  id: PropTypes.string
}

export default DrillListItem;
