/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const StatsListItem = (props) => {
  // child of: Stats

  const { details } = props;
	const average = props.getAverageOfScores(props.scores);
  const historyButton = <button className="btn-extra" data-id={details.id} onClick={(e) => props.goToHistory(e)}>History</button>

  return (
    <li key={props.id}><span className="wrapper">{details.title} - <span className="color">{average.toFixed(0)}%</span> {historyButton}</span></li>
   );
}

StatsListItem.propTypes = {
	details: PropTypes.object.isRequired,
	getAverageOfScores: PropTypes.func.isRequired,
	goToHistory: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	scores: PropTypes.array.isRequired
}

export default StatsListItem;
