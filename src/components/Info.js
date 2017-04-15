import React from 'react';
import Nav from './Nav';

class Info extends React.Component {
  render() {
    return (
        <div className="Page">

        <Nav />

          <div className="Page-title">Instructions</div>
          <div className="Page-text">
            <p>Click <strong>Build a Routine</strong> to create a set of drills you'd like to practice. Then select the specific drills you want to include in your new routine.</p>
            <p>Your new routine will display in <strong>My Routines</strong>. Select the routine you want to practice. Then select the title of the drill you want to try and click <strong>Enter Score</strong> to record your results. Enter the number of attempts and how many points you made according to the scoring instructions for that drill.</p>

          </div>

          <div className="Page-title">About</div>
          <div className="Page-text">Thanks to...</div>

      </div>
    )
  }
}

export default Info;
