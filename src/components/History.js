/* eslint-disable */
import React from 'react';

import '../css/History.css';
import ButtonGroup from './ButtonGroup';
import HistoryListItem from './HistoryListItem';
import Nav from './Nav';
import NoItems from './NoItems';

import { getStoredObject, getAllScores } from '../helpers';

class History extends React.Component {
  constructor() {
    super();

    this.getDrillScoreObj = this.getDrillScoreObj.bind(this);
    this.getDrillScoreAverage = this.getDrillScoreAverage.bind(this);
    
    this.cancelAction = this.cancelAction.bind(this);
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
        <section className="History">
          <Nav />

          <h2>{drillScoreObj.title}</h2>
          <div>Combined: <span className="big color">{ average ? average.toFixed(0) : '0'}%</span></div>
  
          <ul className="text-center">
            { drillScoreObj.scores.map( (key) => 
                <HistoryListItem 
                  key={key.id}
                  date={key.date}
                  score={ key.points / key.attempts * 100 }
                /> )
            }
          </ul>
          <ButtonGroup cancelLabel="Back" cancelAction={this.cancelAction} />
        </section>
      )
    } else {
      return (
        <section className="History">

          <Nav />

          <h2>History</h2>
          <div>{drillScoreObj.title}</div>
          <div className="text-left">
             <NoItems 
               message={`Items will display here as scores are entered for this drill.`}/>
          </div>

        </section>
      )
    }
  }
}

export default History;
