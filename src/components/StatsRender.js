/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import NoItems from './NoItems';
import StatsListItem from './StatsListItem';

const StatsRender = (props) => {

  const allScores = props.getAllScores();

  if( allScores ) {
    const averageAll = props.getAverageAllScores();

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
                  id={key.id}
                  details={key}
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
  getAverageAllScores: PropTypes.func.isRequired,
  getAverageOfScores: PropTypes.func.isRequired,
  getAllScores: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired
}

export default StatsRender;
