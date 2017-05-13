/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import NoItems from './NoItems';
import StatsListItem from './StatsListItem';

const StatsRender = (props) => {

  const allScores = props.allScores;

  if( allScores ) {
    const averageAll = props.getAverageAllScores();

    return (
        <section className="Stats">

        <Nav />

          <h2>Stats</h2>
          <div>Combined Drills: <span className="color">{ averageAll ? averageAll.toFixed(0) : '0'}%</span></div>
          <ul className="text-left anim-pullDown">
            <br />
            {
              allScores.map( (key) => 
                <StatsListItem 
                  key={key.id}
                  stat={key}
                  getAverageOfScores={props.getAverageOfScores}
                  goToHistory={props.goToHistory}
                  scores={key.scores}
                /> )
            }
          </ul>
      </section>
    );

  } else {
    return (
      <section className="Stats">

        <Nav />

          <h2>Stats</h2>
          <div className="text-center">
            <NoItems message={`Items will display here as scores are entered for drills.`}/>
          </div>

      </section>
    );
  }
}

StatsRender.propTypes = {
  allScores: PropTypes.array,
  getAverageAllScores: PropTypes.func.isRequired,
  getAverageOfScores: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired
}

export default StatsRender;
