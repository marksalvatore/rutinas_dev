import React from 'react';

import Nav from './Nav';

class History extends React.Component {
  constructor() {
    super();

    this.getHistory = this.getHistory.bind(this);

  }

  getHistory() {
    // get the scores
    // find those that match the id
    // output average at top
    // output each with date and score
  }

  render() {
  
    return (
        <div className="Page">

        <Nav />

          <div className="Page-title">History</div>
          <div className="Page-text">
            <p>Report of scores over time for this Drill.</p>
          </div>


      </div>
    )
  }
}

export default History;
