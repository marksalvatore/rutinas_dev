import React from 'react';
import PropTypes from 'prop-types';

const HistoryListItem = (props) => {
  // child of: History

	const score = props.score;
	const deleteButton = <button className="btn-danger" data-id={props.id} data-drillid={props.drillId} onClick={(e) => props.deleteScore(e)}>Delete</button>

	const date = new Date(props.date);

  return (
    <li key={props.id}>
      <span className="wrapper">
        <div className="container dropShadow">
          <div className="title">{props.formatDate(date)}</div>
          <div>
          	<span className="average">{score.toFixed(0)}%</span> 
          	<span className="controls">{deleteButton}</span>
          </div>
        </div>
      </span>
    </li>
   );

}

HistoryListItem.propTypes = {
	date: PropTypes.string.isRequired,
  deleteScore: PropTypes.func.isRequired,
	drillId: PropTypes.string.isRequired,
	formatDate: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
}

export default HistoryListItem;
