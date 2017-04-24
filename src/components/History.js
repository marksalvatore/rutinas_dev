import React from 'react';

import Nav from './Nav';
import HistoryListItem from './HistoryListItem';

import { getStoredObject } from '../helpers';

class History extends React.Component {
  constructor() {
    super();

    this.getDrillScoreObj = this.getDrillScoreObj.bind(this);
    this.getDrillScoreAverage = this.getDrillScoreAverage.bind(this);

  }

  getAllScores() {
    if(localStorage.getItem('scores')) {
      return getStoredObject('scores'); 
    }
    return false;
  }

  getDrillScoreObj() {
    const drillId = this.props.params.id;
    let drillScoreObj = null;
    
    const allScores = this.getAllScores();

    // Get drillScoreObj from allScores if exists
    if( allScores ) {
      allScores.map((obj) => {
        if (obj.id === drillId) {
           drillScoreObj = obj;
        }
      });
      if(drillScoreObj) {
        console.log(drillScoreObj);
        return drillScoreObj;
      }
      console.log("no scores 1");
      return false;
    }
    console.log("no scores 2");
    return false;
  }

  getDrillScoreAverage() {
    const drillScoreObj = this.getDrillScoreObj();
    let totalPoints = 0;
    let totalAttempts = 0;
    drillScoreObj.scores.map( s => {
      totalPoints = totalPoints + s.points;
      totalAttempts = totalAttempts + s.attempts;
    }); 
    console.log("average: ", totalPoints / totalAttempts);
    return totalPoints / totalAttempts * 100;
  }

  render() {
    const drillScoreObj = this.getDrillScoreObj();
    const average = this.getDrillScoreAverage();

    return (
        <div className="Page">

        <Nav />

          <div className="Page-title">History</div>
          <div className="Page-subtitle">{drillScoreObj.id}</div>
          <div className="Page-text">Average: {average.toFixed(0)}%
            {
              drillScoreObj.scores.map( (key) => 
                <HistoryListItem 
                  key={key.id}
                  date={key.date}
                  score={ key.points / key.attempts * 100 }

                /> )
            
            }
          </div>



      </div>
    )
  }
}

export default History;
