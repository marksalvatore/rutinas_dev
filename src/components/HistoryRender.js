/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import '../css/History.css';
import ButtonGroup from './ButtonGroup';
import HistoryListItem from './HistoryListItem';
import Nav from './Nav';
import NoItems from './NoItems';

import { getStoredObject, getAllScores } from '../helpers';

class HistoryRender extends React.Component {

  render() {
    const drillScoreObj = this.props.getDrillScoreObj();

    if( drillScoreObj ) {
      const average = this.props.getDrillScoreAverage();
      
      return (
        <section className="History">

          <Nav />

          <h2>{drillScoreObj.title}</h2>
          <div>History: <span className="big color">{ average ? average.toFixed(0) : '0'}%</span></div>
  
          <ul className="text-center anim-pullDown">
            { drillScoreObj.scores.map( (key) => 
                <HistoryListItem 
                  key={key.id}
                  id={key.id}
                  date={key.date}
                  score={ key.points / key.attempts * 100 }
                /> )
            }
          </ul>
          <ButtonGroup cancelLabel="Back" cancelAction={this.props.cancelAction} extraLabel="Score" extraAction={this.props.extraAction} />
        </section>
      )
    } else {
      return (
        <section className="History">

          <Nav />

          <h2>History</h2>
          <div>{drillScoreObj.title}</div>
          <div className="text-left">
             <NoItems 
               message={`Items will display here as scores are entered for this drill.`}/>
          </div>

        </section>
      )
    }
  }
}

HistoryRender.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  extraAction: PropTypes.func.isRequired,
  getDrillScoreAverage: PropTypes.func.isRequired,
  getDrillScoreObj: PropTypes.func.isRequired
}

export default HistoryRender;
