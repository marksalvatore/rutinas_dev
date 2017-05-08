/* eslint-disable */
import React from 'react';

import '../css/Stats.css';
import StatsRender from './StatsRender';
import { getStoredObject } from '../helpers';

class Stats extends React.Component {
  constructor() {
    super();

    this.getAverageAllScores = this.getAverageAllScores.bind(this);
    this.getAverageOfScores = this.getAverageOfScores.bind(this);
    this.goToHistory = this.goToHistory.bind(this);
  }

  getAverageAllScores() {
    const allScores = getStoredObject('scores');
    let totalPoints = 0;
    let totalAttempts = 0;
    allScores.map( obj => {
       obj.scores.map( s => {
        totalPoints += s.points;
        totalAttempts += s.attempts;
      });
    }); 
    return totalPoints / totalAttempts * 100;
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

  goToHistory(e) {
    let id = e.target.dataset.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  render() {
    return(
      <StatsRender 
        allScores={getStoredObject('scores')}
        getAverageAllScores={this.getAverageAllScores}
        getAverageOfScores={this.getAverageOfScores}
        goToHistory={this.goToHistory}
      />
    );
  }
}

Stats.contextTypes = {
  router: React.PropTypes.object
}

export default Stats;
