/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const StatsListItem = (props) => {
  // child of: Stats

  const { details } = props;
	const average = props.getAverageOfScores(props.scores);
  const historyButton = <button className="btn-secondary" data-id={details.id} onClick={(e) => props.goToHistory(e)}>History</button>

  return (
    <li key={details.id}>
      <span className="wrapper">
        <div className="container dropShadow">
          <div className="title">{details.title}</div>
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
	details: PropTypes.object.isRequired,
	getAverageOfScores: PropTypes.func.isRequired,
	goToHistory: PropTypes.func.isRequired,
	scores: PropTypes.array.isRequired
}

export default StatsListItem;
