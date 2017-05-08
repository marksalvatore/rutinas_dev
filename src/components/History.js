/* eslint-disable */
import React from 'react';

import '../css/History.css';
import ButtonGroup from './ButtonGroup';
import HistoryListItem from './HistoryListItem';
import HistoryRender from './HistoryRender';
import Nav from './Nav';
import NoItems from './NoItems';

import { getStoredObject, getAllScores } from '../helpers';

class History extends React.Component {
  constructor() {
    super();

    this.getDrillScoreObj = this.getDrillScoreObj.bind(this);
    this.getDrillScoreAverage = this.getDrillScoreAverage.bind(this);
    this.cancelAction = this.cancelAction.bind(this);
    this.primaryAction = this.primaryAction.bind(this);
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

  primaryAction() {
    const drillId = this.props.params.id;
    this.context.router.transitionTo(`/score/${drillId}`);
  }

  render() {
    return ( 
      <HistoryRender 
        getDrillScoreObj = {this.getDrillScoreObj}
        getDrillScoreAverage = {this.getDrillScoreAverage}
        cancelAction = {this.cancelAction}
        primaryAction = {this.primaryAction}
      /> 
    )
  }
}

History.contextTypes = {
  router: React.PropTypes.object
}

export default History;
