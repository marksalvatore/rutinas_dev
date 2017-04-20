import React from 'react';

import Nav from './Nav';
import { getStoredObject } from '../helpers';

class Save extends React.Component {
  constructor() {
    super();

    this.getRecentScore = this.getRecentScore.bind(this);
    this.getAverageScore = this.getAverageScore.bind(this);
    this.getAllScores = this.getAllScores.bind(this);
    this.getDrillScores = this.getDrillScores.bind(this);

    this.state = {
      recentScore: 0,
      averageScore: 0
    };
  }

  componentWillMount() {
    let scoresForDrill = this.getDrillScores();
    let recentScoreObj = this.getRecentScore(scoresForDrill);
    this.setState({ recentScore: recentScoreObj.score });
    let averageScore = this.getAverageScore(scoresForDrill); 
    this.setState({ averageScore: averageScore });
  }

  getDrillScores() {
    let id = this.props.params.id;
    let scoresForDrill = [];
    let allScores = this.getAllScores();
    // find all all Scores for this drill
    if(allScores) {
      allScores.map((obj) => {
        if (obj.id === id) {
           scoresForDrill.push(obj);
           return true;
        }
      });
    }
    return scoresForDrill;
  }

  getAllScores() {
    if(localStorage.getItem('scores')) {
      return getStoredObject('scores'); 
    }
    return false;
  }

  getRecentScore() {
    let scoresForDrill = this.getDrillScores();
    console.log("RecentScore: ", scoresForDrill[scoresForDrill.length - 1]);
    return scoresForDrill[scoresForDrill.length - 1];
  }

  getAverageScore() {
    let scoresForDrill = this.getDrillScores();
    let total = 0;
    let average = 0;
    scoresForDrill.map((obj) => total += obj.score);
    if(total) {
      average = total / scoresForDrill.length;
      console.log("Average score: ", average);
      return average;
    }
    return false;
  }



  render() {
  
    return (
    	<div className="Page">

        <Nav />

        <div className="Page-title">Saved!</div>
        <div className="Page-text">
          <p>Your scored {Math.floor(this.state.recentScore * 100)}% for this drill. Your average score for this drill is {Math.floor(this.state.averageScore * 100)}%.</p>
        </div>

    	</div>
    )
  }
}

export default Save;
