/* eslint-disable */
import React from 'react';

class StatsListItem extends React.Component {
  // child of: Stats
  constructor() {
  	super();

  	this.getAverageOfScores = this.getAverageOfScores.bind(this);
  }

  getAverageOfScores(scoresArr) {
    let totalPoints = 0;
    let totalAttempts = 0;
    scoresArr.map( s => {
      totalPoints += s.points;
      totalAttempts += s.attempts;
     });
    return totalPoints / totalAttempts * 100;
  }

  render() {
    const { details } = this.props;
  	const average = this.getAverageOfScores(this.props.scores);
    const historyButton = <button data-id={details.id} onClick={(e) => this.props.getHistory(e)}>History</button>

    return (
      <li>{details.title} - <span className="color">{average.toFixed(0)}%</span> {historyButton} </li>
     );
   }
}

export default StatsListItem;
