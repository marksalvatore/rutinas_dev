import React from 'react';

import Nav from './Nav';
import StatsListItem from './StatsListItem';
import NoItems from './NoItems';

import { getStoredObject } from '../helpers';

class Stats extends React.Component {
  constructor() {
    super();

    this.getAllScores = this.getAllScores.bind(this);
    this.getAverageAllScores = this.getAverageAllScores.bind(this);
  }

 
  getAllScores() {
    if(localStorage.getItem('scores')) {
      return getStoredObject('scores'); 
    }
    return false;
  }

  getAverageAllScores() {
    const allScores = this.getAllScores();
    let totalPoints = 0;
    let totalAttempts = 0;
    allScores.map( obj => {
       obj.scores.map( s => {
        totalPoints += s.points;
        totalAttempts += s.attempts;
      });
    }); 
    console.log("totalPoints: ", totalPoints);
    console.log("totalAttempts: ", totalAttempts);
    return totalPoints / totalAttempts * 100;

  }


  render() {
    const allScores = this.getAllScores();
    console.log("allScores: ", allScores);

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
               <NoItems />
            </div>

        </div>
      )
    }


  }
}

export default Stats;
