import React from 'react';

import Nav from './Nav';

class Stats extends React.Component {
  render() {
    return (
        <div className="Page">

        <Nav />

          <div className="Page-title">Statistics</div>
          <div className="Page-text">
            <p>Your stats for this drill over time.</p>

          </div>

   

      </div>
    )
  }
}

export default Stats;
