import React from 'react';
import { Link } from 'react-router';

import eightball from '../../public/images/eightball.png';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <div className="Page">

        <Nav />

        <div className="App-title">Routines</div>
        <div className="App-byline">Improve your pool game.</div>
        <div className="App-logo">
          <img src={eightball} alt="Eight Ball" width="100"/>
        </div>
        <div className="App-description">
          Create practice routines from the drills
          <br/>you choose, and monitor your progress.
        </div>

        <button className="getStarted">
           <Link to="/info">Get started</Link>
        </button>
        
      </div>
    );
  }
}

export default App;
