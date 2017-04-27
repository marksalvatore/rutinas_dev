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

            <h2 className="titleHeading">Stats</h2>
            <h2 className="heading2 color">Average of all drills: <span className="big">{ averageAll ? averageAll.toFixed(0) : '0'}%</span></h2>
            <div className="list">
              <br />
              {
                allScores.map( (key) => 
                  <StatsListItem 
                    key={key.id}
                    details={key}
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

            <h2 className="titleHeading">Stats</h2>
            <div className="text">
              <NoItems message={`Items will display here as scores are entered for drills.`}/>
            </div>

        </div>
      )
    }
  }
}

export default Stats;
