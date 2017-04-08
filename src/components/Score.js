import React from 'react';
import ScoreNav from './ScoreNav';

class Score extends React.Component {
  render() {
    return (
    	<div className="Page">
 
        <div className="Page-title">Drill #</div>
        <div className="Page-text">
          <p>Attempts:</p>
          <p>Points:</p>
        </div>

        <ScoreNav />

    	</div>
    )
  }
}

export default Score;
