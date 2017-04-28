/* eslint-disable */
import React from 'react';

import '../css/Stats.css';
import Nav from './Nav';
import NoItems from './NoItems';
import StatsListItem from './StatsListItem';

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

    if( allScores ) {
      const averageAll = this.getAverageAllScores();

      return (
          <section id="Stats">

          <Nav />

            <h2>Stats</h2>
            <div>Combined Drills: <span className="big color">{ averageAll ? averageAll.toFixed(0) : '0'}%</span></div>
            <div className="text-left">
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
        </section>
      )
    } else {
      return (
          <section id="Stats">

          <Nav />

            <h2>Stats</h2>
            <div className="text-center">
              <NoItems message={`Items will display here as scores are entered for drills.`}/>
            </div>

        </section>
      )
    }
  }
}

export default Stats;
