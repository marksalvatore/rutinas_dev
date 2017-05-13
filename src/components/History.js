/* eslint-disable */
import React from 'react';

import '../css/History.css';
import ButtonGroup from './ButtonGroup';
import HistoryListItem from './HistoryListItem';
import HistoryRender from './HistoryRender';
import Nav from './Nav';
import NoItems from './NoItems';

import { getStoredObject, storeObject } from '../helpers';

class History extends React.Component {
  constructor() {
    super();

    this.cancelAction = this.cancelAction.bind(this);
    this.deleteScore = this.deleteScore.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.getDrillScoreObj = this.getDrillScoreObj.bind(this);
    this.getDrillScoreAverage = this.getDrillScoreAverage.bind(this);
    this.primaryAction = this.primaryAction.bind(this);
  }

  cancelAction() {
    history.back();
  }

  deleteScore(e) {
    const drillId = e.target.dataset.drillid;
    const scoreId = e.target.dataset.id;

    const allScores = getStoredObject('scores');
    let allScoresLite = allScores.filter(obj => obj.id !== drillId);
    let targetDrill = allScores.filter(obj => obj.id === drillId);
    const targetDrillScoresArray = targetDrill[0].scores;
    const targetDrillScoresArrayLite = targetDrillScoresArray.filter(obj => obj.id !== scoreId);

    

    // Add scores array back to the drill, and the drill back to allScoresLite, but only if the drill has a score left to store
    if(targetDrillScoresArrayLite.length) {
      delete targetDrill[0].scores;
      targetDrill[0].scores = targetDrillScoresArrayLite;
      allScoresLite.push(targetDrill[0]);
    } 

    storeObject('scores', allScoresLite);
    this.context.router.transitionTo(`/history/${drillId}`);
  }

  formatDate(date) {
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", 
      "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
  }

  getDrillScoreObj() {
    const drillId = this.props.params.id;
    let drillScoreObj = null;
    
    const allScores = getStoredObject('scores');

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

  primaryAction() {
    const drillId = this.props.params.id;
    this.context.router.transitionTo(`/score/${drillId}`);
  }

  render() {
    return ( 
      <HistoryRender 
        cancelAction = {this.cancelAction}
        deleteScore = {this.deleteScore}
        drillId={this.props.params.id}
        formatDate = {this.formatDate}
        getDrillScoreObj = {this.getDrillScoreObj}
        getDrillScoreAverage = {this.getDrillScoreAverage}
        primaryAction = {this.primaryAction}
      /> 
    )
  }
}

History.contextTypes = {
  router: React.PropTypes.object
}

export default History;
