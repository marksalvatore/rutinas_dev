/* eslint-disable */
import React from 'react';

import '../css/Save.css';
import ButtonGroup from './ButtonGroup';
import Nav from './Nav';
import { getStoredObject, getAllScores } from '../helpers';

class Save extends React.Component {
  constructor() {
    super();

    this.getAverageDrillScore = this.getAverageDrillScore.bind(this);
    this.getDrillScores = this.getDrillScores.bind(this);
    this.getRecentDrillScore = this.getRecentDrillScore.bind(this);
    
    this.cancelAction = this.cancelAction.bind(this);
    this.saveAction = this.saveAction.bind(this);

    this.state = {
      recentScore: 0,
      averageScore: 0
    };
  }

  componentWillMount() {
    let scoresForDrill = this.getDrillScores();

    let recentScore = this.getRecentDrillScore(scoresForDrill);
    this.setState({ recentScore });

    let averageScore = this.getAverageDrillScore(scoresForDrill); 
    this.setState({ averageScore });
  }

  getAverageDrillScore() {
    let scoresForDrill = this.getDrillScores();
    let totalPoints = 0;
    let totalAttempts = 0;
    let average = 0;
    scoresForDrill.map((obj) => {
      totalPoints += obj.points;
      totalAttempts += obj.attempts;
    });

    if( totalPoints > 0 ) {
      average = totalPoints / totalAttempts;
      console.log("Average score: ", (average * 100 ).toFixed(0) + "%");
      return average;
    }
    return false;
  }

  getDrillScores() {
    let id = this.props.params.id;
    let scoresForDrill = [];
    let allScores = getAllScores();
    // find all all Scores for this drill
    if( allScores ) {
      allScores.map((obj) => {
        if (obj.id === id) {
           scoresForDrill = obj.scores;
        }
      });
    }
    return scoresForDrill;
  }

  getRecentDrillScore() {
    let scoresForDrill = this.getDrillScores();
    let recentScore = scoresForDrill[scoresForDrill.length - 1];
    console.log("RecentScore: ", (recentScore.points / recentScore.attempts * 100).toFixed(0) + "%");
    return recentScore.points / recentScore.attempts;
  }

  cancelAction() {
    history.back();
  }

  saveAction() {
    let id = this.props.params.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  render() {
  
    return (
    	<section className="Save">

        <Nav />

        <h2>Saved!</h2>
        <div className="text-left">
          <p>Your scored <strong>{Math.floor(this.state.recentScore * 100)}%</strong> for this drill.</p>
          <p>Your running average score for this drill so far is <strong>{Math.floor(this.state.averageScore * 100)}%</strong>.</p>
        </div>

        <ButtonGroup saveLabel="History" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />

    	</section>
    )
  }
}

Save.contextTypes = {
  router: React.PropTypes.object
}


export default Save;
