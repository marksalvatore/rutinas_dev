import React, { Component } from 'react';

import eightball from '../../public/images/eightball.png';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Routines</div>
        <div className="App-byline">Improve your pool game.</div>
        <div className="App-logo">
          <img src={eightball} alt="Eight Ball" />
        </div>
        <div className="App-description">
          Create practice routines from the drills
          <br/>you choose, and monitor your progress.
        </div>
        <div className="App-menu">
          <div className="App-menu-item">Instructions</div>
          <div className="App-menu-item">Routines</div>
          <div className="App-menu-item">New Routine</div>
        </div>
      </div>
    );
  }
}


export default App;


