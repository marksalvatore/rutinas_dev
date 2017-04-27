/* eslint-disable */

import React from 'react';

import Nav from './Nav';
import HistoryListItem from './HistoryListItem';
import ButtonGroup from './ButtonGroup';
import NoItems from './NoItems';

import { getStoredObject, getAllScores } from '../helpers';

class History extends React.Component {
  constructor() {
    super();

    this.getDrillScoreObj = this.getDrillScoreObj.bind(this);
    this.getDrillScoreAverage = this.getDrillScoreAverage.bind(this);
  }

  getDrillScoreObj() {
    const drillId = this.props.params.id;
    let drillScoreObj = null;
    
    const allScores = getAllScores();

    // Get drillScoreObj from allScores if exists
    if( allScores ) {
      allScores.map((obj) => {
        if (obj.id === drillId) {
           drillScoreObj = obj;
        }
      });
      if(drillScoreObj) {
        return drillScoreObj;
      }
      return false;
    }
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
    return totalPoints / totalAttempts * 100;
  }

  cancelAction() {
    history.back();
  }

  render() {
    const drillScoreObj = this.getDrillScoreObj();

    if( drillScoreObj ) {
      const average = this.getDrillScoreAverage();
      return (
        <div className="Page">
          <Nav />

          <h2 className="titleHeading">{drillScoreObj.title}</h2>
          <h3 className="subTitleHeading">History
          <div>Average: <span className="big color">{ average ? average.toFixed(0) : '0'}%</span></div></h3>
  
          <div className="list-equalLength">
            { drillScoreObj.scores.map( (key) => 
                <HistoryListItem 
                  key={key.id}
                  date={key.date}
                  score={ key.points / key.attempts * 100 }
                /> )
            }
          </div>
          <ButtonGroup cancelLabel="Back" cancelAction={this.cancelAction} />
        </div>
      )
    } else {
      return (
        <div className="Page">
          <Nav />

          <h2 className="titleHeading">History</h2>
          <div>{drillScoreObj.title}</div>
          <div className="text">
             <NoItems 
               message={`Items will display here as scores are entered for this drill.`}/>
          </div>

        </div>
      )
    }
  }
}

export default History;
