/* eslint-disable */
import React from 'react';

import Nav from './Nav';
import NoItems from './NoItems';
import StatsListItem from './StatsListItem';

class StatsRender extends React.Component {

  render() {
    const allScores = this.props.getAllScores();

    if( allScores ) {
      const averageAll = this.props.getAverageAllScores();

      return (
          <section className="Stats">

          <Nav />

            <h2>Stats</h2>
            <div>Combined Drills: <span className="big color">{ averageAll ? averageAll.toFixed(0) : '0'}%</span></div>
            <ul className="text-left anim-pullDown">
              <br />
              {
                allScores.map( (key) => 
                  <StatsListItem 
                    key={key.id}
                    details={key}
                    scores={key.scores}
                    getHistory={this.props.getHistory}
                  /> )
              }
            </ul>
        </section>
      )
    } else {
      return (
          <section className="Stats">

          <Nav />

            <h2>Stats</h2>
            <div className="text-center">
              <NoItems message={`Items will display here as scores are entered for drills.`}/>
            </div>

        </section>
      )
    }
  }
}

export default StatsRender;
