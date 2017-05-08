/* eslint-disable */
import React from 'react';

import '../css/Save.css';
import SaveRender from './SaveRender';
import { getStoredObject } from '../helpers';

class Save extends React.Component {
  constructor() {
    super();

    this.getAverageDrillScore = this.getAverageDrillScore.bind(this);
    this.getDrillScores = this.getDrillScores.bind(this);
    this.getRecentDrillScore = this.getRecentDrillScore.bind(this);
    
    this.cancelAction = this.cancelAction.bind(this);
    this.secondaryAction = this.secondaryAction.bind(this);

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
    let allScores = getStoredObject('scores');
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

  secondaryAction() {
    let id = this.props.params.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  render() {
    return (
      <SaveRender 
      recentScore={this.state.recentScore}
      averageScore={this.state.averageScore}
      secondaryAction={this.secondaryAction}
      cancelAction={this.cancelAction}
      />
    )
  }
}

Save.contextTypes = {
  router: React.PropTypes.object
}

export default Save;
