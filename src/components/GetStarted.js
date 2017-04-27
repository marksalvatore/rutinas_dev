import React from 'react';
import { Link } from 'react-router';

import eightball from '../../public/images/eightball.png';

class GetStarted extends React.Component {

  render() {

    return (
      <div className="Splash">

        <h1 className="heading1">Routines</h1>
        <h2 className="heading2">Improve your pool game.</h2>
        <div className="logo">
          <img src={eightball} alt="Eight Ball" />
        </div>
        <div className="description">
          <p>Create practice routines from the drills
          <br/>you choose, and monitor your progress.</p>
        </div>

        <button className="getStarted">
           <Link to="/info">Get started</Link>
        </button>
        
      </div>
    );
  }
}

export default GetStarted;
