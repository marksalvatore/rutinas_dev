import React from 'react';

const HistoryListItem = (props) => {
  // child of: History

	const score = props.score;

	// add delete function on item

  return (
    <li key={props.id}><span className="wrapper">{props.date} - <span className="color">{score.toFixed(0)}%</span></span></li>
   );
}

export default HistoryListItem;
