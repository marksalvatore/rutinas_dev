/* eslint-disable */
import React from 'react';

const StatsListItem = (props) => {
  // child of: Stats

  const { details } = props;
	const average = props.getAverageOfScores(props.scores);
  const historyButton = <button className="btn-secondary" data-id={details.id} onClick={(e) => props.goToHistory(e)}>History</button>

  return (
    <li key={props.id}><span className="wrapper">{details.title} - <span className="color">{average.toFixed(0)}%</span> {historyButton}</span></li>
   );
}

export default StatsListItem;
