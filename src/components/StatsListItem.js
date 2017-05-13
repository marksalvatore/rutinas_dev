/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const StatsListItem = (props) => {
  // child of: StatsRender

  const { stat, getAverageOfScores, goToHistory, scores } = props;
	const average = getAverageOfScores(scores);
  const historyButton = <button className="btn-secondary" data-id={stat.id} onClick={(e) => goToHistory(e)}>History</button>

  return (
    <li>
      <span className="wrapper">
        <div className="container dropShadow">
          <div className="title">{stat.title}</div>
          <div>
          	<span className="average">{average.toFixed(0)}%</span> 
          	<span className="controls">{historyButton}</span>
          </div>
        </div>
      </span>
    </li>
   );

}

StatsListItem.propTypes = {
	stat: PropTypes.object.isRequired,
	getAverageOfScores: PropTypes.func.isRequired,
	goToHistory: PropTypes.func.isRequired,
	scores: PropTypes.array.isRequired
}

export default StatsListItem;
