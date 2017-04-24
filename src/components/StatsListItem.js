import React from 'react';

class StatsListItem extends React.Component {
  // called by: History
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

  	const average = this.getAverageOfScores(this.props.scores);

    return (
      <li>{this.props.drillId} - {average.toFixed(0)}%</li>
     );
   }
}

export default StatsListItem;
