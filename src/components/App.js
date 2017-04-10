import React from 'react';
import { Link } from 'react-router';

import drillData from '../../data-drills.json';
import eightball from '../../public/images/eightball.png';
import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      drillData: drillData
    };
  }

  render() {
    return (
      <div className="Page">

        <Nav />

        <div className="App-title">Routines</div>
        <div className="App-byline">Improve your pool game.</div>
        <div className="App-logo">
          <img src={eightball} alt="Eight Ball" />
        </div>
        <div className="App-description">
          Create practice routines from the drills
          <br/>you choose, and monitor your progress.
        </div>

        <div className="getStarted">
           <Link to="/instructions">Get started</Link>
        </div>
        
      </div>
    );
  }
}

export default App;
