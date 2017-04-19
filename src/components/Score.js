import React from 'react';

import Nav from './Nav';
import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';

class Score extends React.Component {
  constructor() {
    super();

    this.getDrills = this.getDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);
    this.addToScores = this.addToScores.bind(this);
    this.createScore = this.createScore.bind(this);
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

  saveAction(e) {
    e.preventDefault();
    let id = this.props.params.id;
    let scoreObj = this.createScore(id);
    this.addToScores(scoreObj);
    this.scoreForm.reset();
    this.context.router.transitionTo(`/save/${id}`);
  }

  cancelAction() {
    history.back();
  }

  createScore(id) {
    const result = parseInt(this.points.value, 10) / parseInt(this.attempts.value, 10);
    
    const scoreObj = {
      id: id,
      score: result
    }
    return scoreObj;
  }

  addToScores(scoreObj) {
    let scores = {...this.state.scores};
    const timestamp = Date.now();
 
    scores[`score-${timestamp}`] = scoreObj;
    this.setState({ scores }, function(){
      console.log(this.state.scores);
    });
  }

  render() {
    return (
      <div className="Page">

        <Nav />

        <div className="Page-title">{this.state.drill.title}</div>
        
        <form ref={(input) => this.scoreForm = input} onSubmit={(e) => this.saveAction(e)}>
          <input ref={(input) => this.points = input} type="text" placeholder="Number of points "/>
          <input ref={(input) => this.attempts = input} type="text" placeholder="Number of attempts"/>
          <button onClick={this.cancelAction}>Back</button>
          <button type="submit">Save Score</button>
        </form>

      </div>    
    )
  }
}

Score.contextTypes = {
  router: React.PropTypes.object
}


export default Score;
