/* eslint-disable */

import React from 'react';

import Nav from './Nav';
import StatsListItem from './StatsListItem';
import NoItems from './NoItems';

import { getStoredObject, getAllScores } from '../helpers';

class Stats extends React.Component {
  constructor() {
    super();

    this.getAverageAllScores = this.getAverageAllScores.bind(this);
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

  render() {
    const allScores = getAllScores();
    console.log("Does at least one score exist? ", allScores);

    if( allScores ) {
      const averageAll = this.getAverageAllScores();

      return (
          <div className="Page">

          <Nav />

            <div className="Page-title">Stats</div>
            <div className="Page-subtitle">Average of all drills: { averageAll ? averageAll.toFixed(0) : '0'}%</div>
            <div className="Page-text">
              
              {
                allScores.map( (key) => 
                  <StatsListItem 
                    key={key.id}
                    drillId={key.id}
                    scores={key.scores}
                  /> )
              }
            </div>
        </div>
      )
    } else {
      return (
          <div className="Page">

          <Nav />

            <div className="Page-title">Stats</div>
            <div className="Page-text">
              <NoItems message={`Items will display here as scores are entered for drills.`}/>
            </div>

        </div>
      )
    }
  }
}

export default Stats;
