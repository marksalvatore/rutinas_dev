import React from 'react';
import PropTypes from 'prop-types';

const HistoryListItem = (props) => {
  // child of: History

	const score = props.score;

  return (
    <li key={props.id}><span className="wrapper">{props.date} - <span className="color">{score.toFixed(0)}%</span></span></li>
   );
}

HistoryListItem.propTypes = {
	date: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
}

export default HistoryListItem;
