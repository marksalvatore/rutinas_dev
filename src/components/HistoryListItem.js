import React from 'react';
import PropTypes from 'prop-types';

const HistoryListItem = (props) => {
  // child of: HistoryRender

	const { deleteScore, drillId, formatDate, id, score } = props;
  let { date } = props;
  
	const deleteButton = <button className="btn-danger" data-id={id} data-drillid={drillId} onClick={(e) => deleteScore(e)}>Delete</button>

  date = new Date(date);

  return (
    <li>
      <span className="wrapper">
        <div className="container dropShadow">
          <div className="title">{formatDate(date)}</div>
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
