import React from 'react';
import PropTypes from 'prop-types';

const DrillListItem = (props) => {
  // child of: RoutineDetailRender

  const { deleteDrill, drill, goToHistory, goToScore, goToSetup } = props;

  if( drill ) {
    const title = <a data-id={drill.id} onClick={(e) => goToScore(e)}>{drill.title}</a>
    const deleteButton = <button className="btn-danger" data-id={drill.id} onClick={(e) => deleteDrill(e)}>Delete</button>
    const historyButton = <button className="btn-secondary" data-id={drill.id} onClick={(e) => goToHistory(e)}>History</button>
    const setupButton = <button className="btn-secondary" data-id={drill.id} onClick={(e) => goToSetup(e)}>Setup</button>
    const scoreButton = <button className="btn-primary"data-id={drill.id} onClick={(e) => goToScore(e)}>Score</button>

    return (
      <li>
        <span className="wrapper">
          <div className="container dropShadow">
            <div className="title">{title}</div>
            <div>{scoreButton} {setupButton} {historyButton} {deleteButton}</div>
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
  drill: PropTypes.object.isRequired,
  goToHistory: PropTypes.func,
  goToScore: PropTypes.func,
  goToSetup: PropTypes.func
}

export default DrillListItem;
