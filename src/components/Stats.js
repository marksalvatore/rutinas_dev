/* eslint-disable */
import React from 'react';

import '../css/Stats.css';
import StatsRender from './StatsRender';
import { getStoredObject, getAllScores } from '../helpers';

class Stats extends React.Component {
  constructor() {
    super();

    this.getAverageAllScores = this.getAverageAllScores.bind(this);
    this.getHistory = this.getHistory.bind(this);
  }

  getAverageAllScores() {
    const allScores = getAllScores();
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

  getHistory(e) {
    let id = e.target.dataset.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  render() {
    return(
      <StatsRender 
        getAllScores={getAllScores}
        getAverageAllScores={this.getAverageAllScores}
        getHistory={this.getHistory}
      />
    ) 
  }
}

Stats.contextTypes = {
  router: React.PropTypes.object
}

export default Stats;
