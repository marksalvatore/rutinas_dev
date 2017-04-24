/* eslint-disable */

import React from 'react';

import Nav from './Nav';
import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';

class Score extends React.Component {
  constructor() {
    super();

    this.getDrills = this.getDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);
    this.storeDrillScoreObj = this.storeDrillScoreObj.bind(this);
    this.createDrillScoreObj = this.createDrillScoreObj.bind(this);
    this.getStringDate = this.getStringDate.bind(this);
    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);

    this.state = {
      drill: {},
      scores: {}
    };
  }

  componentWillMount() {
    this.setDrill();
  }

  getDrills() {
    // load from json, or storage if already loaded
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      return drillsData;

    } else {
      return getStoredObject('drills'); 
    }
  }

  setDrill() {
    let drills = this.getDrills();
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill });
  }

  getAllScores() {
    if(localStorage.getItem('scores')) {
      return getStoredObject('scores'); 
    }
    return false;
  }

  getStringDate(dateObj) {
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    return year + '-' + month + '-' + day;
  }

  createDrillScoreObj() {
    let drillId = this.props.params.id;
    let drillScoreObj = null;
    const timestampId = Date.now();
    let date = new Date();
    date = this.getStringDate(date);
    const points = parseInt(this.points.value, 10);
    const attempts = parseInt(this.attempts.value, 10);
    const allScores = this.getAllScores();

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
      console.log("drillScoreObj exists");
      let newScore = {
        id: `score-${timestampId}`,
        points: points,
        attempts: attempts,
        date: date
      }
      drillScoreObj.scores[drillScoreObj.scores.length] = newScore;

    } else {
      // Create scores object
      console.log("drillScoreObj doesn't exist");
      drillScoreObj = {
        id: drillId,
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

  saveAction(e) {
    e.preventDefault();
    if( this.attempts.value > 0 && this.points.value > 0) {
      let drillId = this.props.params.id;
      let drillScoreObj = this.createDrillScoreObj();

      this.storeDrillScoreObj(drillScoreObj);
      this.scoreForm.reset();
      this.context.router.transitionTo(`/save/${drillId}`);
    }
  }

  cancelAction() {
    history.back();
  }


  render() {
    return (
      <div className="Page">

        <Nav />

        <div className="Page-title">{this.state.drill.title}</div>
        
        <form ref={(input) => this.scoreForm = input} onSubmit={(e) => this.saveAction(e)}>
          <input type="number" ref={(input) => this.points = input} placeholder="# of points "/>
          <input type="number" ref={(input) => this.attempts = input} placeholder="# of attempts"/>
          <div className="button-group">
            <button onClick={this.cancelAction}>Back</button>
            <button type="submit">Save Score</button>
           </div>
        </form>

      </div>    
    )
  }
}

Score.contextTypes = {
  router: React.PropTypes.object
}


export default Score;
