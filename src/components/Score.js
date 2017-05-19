/* eslint-disable */
import React from 'react';

import drillsData from '../data-drills.json';
import '../css/Score.css';
import ScoreRender from './ScoreRender';

import { getStoredObject, storeObject } from '../helpers';

class Score extends React.Component {
  constructor() {
    super();

    this.createDrillScoreObj = this.createDrillScoreObj.bind(this);
    this.getDrills = this.getDrills.bind(this);
    this.getStringDate = this.getStringDate.bind(this);
    this.setDrill = this.setDrill.bind(this);
    this.storeDrillScoreObj = this.storeDrillScoreObj.bind(this);

    this.cancelAction = this.cancelAction.bind(this);
    this.primaryAction = this.primaryAction.bind(this);
    this.secondaryAction = this.secondaryAction.bind(this);

    this.state = {
      drill: {},
      scores: {}
    };
  }

  componentWillMount() {
    this.setDrill();
  }

  createDrillScoreObj(points, attempts) {
    let drillId = this.props.params.id;
    let drillScoreObj = null;
    const timestampId = Date.now();
    let date = new Date();
    date = this.getStringDate(date);
    points = parseInt(points, 10);
    attempts = parseInt(attempts, 10);
    const allScores = getStoredObject('scores');

    // Get drillScoreObj from allScores if exists
    if( allScores ) {
      allScores.map((obj) => {
        if (obj.id === drillId) {
           drillScoreObj = obj;
        }
      });
    }

    if( drillScoreObj ) {
      // Update existing scores in drillScoreObj
      console.log("Other scores exist for this drill.");
      let newScore = {
        id: `score-${timestampId}`,
        points: points,
        attempts: attempts,
        date: date
      }
      drillScoreObj.scores[drillScoreObj.scores.length] = newScore;

    } else {
      // Create scores object
      console.log("This is the first scoring for this drill.");
      drillScoreObj = {
        id: drillId,
        title: this.state.drill.title,
        scores: [{
           id: `score-${timestampId}`,
           points: points,
           attempts: attempts,
           date: date
        }]
      }
    }
    return drillScoreObj;
  }

  getDrills() {
    // load from json, or storage if already loaded
    if(!getStoredObject('drills')) {
      storeObject('drills', drillsData);
      return drillsData;

    } else {
      return getStoredObject('drills'); 
    }
  }

  getStringDate(dateObj) {
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    return year + '-' + month + '-' + day;
  }

  setDrill() {
    let drills = this.getDrills();
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill });
  }

  storeDrillScoreObj(drillScoreObj) {
    // get scores from storage
    let storedScores = getStoredObject("scores");

    if (storedScores) {

      // remove original drillScoreObj
      let storedScoresLite = storedScores.filter( key => key.id !== drillScoreObj.id);

      // Add new drillScoreObj to storedScoresLite
      storedScoresLite.push(drillScoreObj);
      // Store the updated set of Scores
      storeObject("scores", storedScoresLite);

    } else {
      // Just need to put drillScoreObj into a one element array before storing
      let arr = [];
      arr[0] = drillScoreObj;
      storeObject("scores", arr);
    }
  }

  cancelAction() {
    history.back();
  }

  secondaryAction() {
    let drillId = this.props.params.id;
    this.context.router.transitionTo(`/setup/${drillId}`);
  }

  primaryAction(e) {
    e.preventDefault();
    let points = document.querySelector('[placeholder="points"]').value;
    let attempts = document.querySelector('[placeholder="attempts"]').value;
    if( !isNaN(attempts) && attempts > 0 && !isNaN(points) && points >= 0) {
      let drillId = this.props.params.id;
      let drillScoreObj = this.createDrillScoreObj(points, attempts);

      this.storeDrillScoreObj(drillScoreObj);
      //document.querySelector('form').reset();
      this.context.router.transitionTo(`/save/${drillId}`);
    }
  }

  render() {
    return (
      <ScoreRender 
        drillTitle={this.state.drill.title} 
        primaryAction={this.primaryAction}
        secondaryAction={this.secondaryAction}
        cancelAction={this.cancelAction}
      />
    )
  }
}

Score.contextTypes = {
  router: React.PropTypes.object
}


export default Score;
