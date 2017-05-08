/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import '../css/History.css';
import ButtonGroup from './ButtonGroup';
import HistoryListItem from './HistoryListItem';
import Nav from './Nav';
import NoItems from './NoItems';

import { getStoredObject } from '../helpers';

class HistoryRender extends React.Component {

  render() {
    const drillScoreObj = this.props.getDrillScoreObj();

    if( drillScoreObj ) {
      const average = this.props.getDrillScoreAverage();
      
      return (
        <section className="History">

          <Nav />

          <h2>{drillScoreObj.title}</h2>
          <div>Combined History: <span className="color">{ average ? average.toFixed(0) : '0'}%</span>
          </div>

          <ButtonGroup cancelLabel="Back" cancelAction={this.props.cancelAction} primaryLabel="Score" primaryAction={this.props.primaryAction} />

          <ul className="text-center anim-pullDown">
            { drillScoreObj.scores.map( (key) => 
                <HistoryListItem 
                  key={key.id}
                  id={key.id}
                  date={key.date}
                  deleteScore={this.props.deleteScore}
                  drillId={this.props.drillId}
                  formatDate={this.props.formatDate}
                  score={ key.points / key.attempts * 100 }
                /> )
            }
          </ul>

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
             <ButtonGroup cancelLabel="Back" cancelAction={this.props.cancelAction} />
          </div>

        </section>
      )
    }
  }
}

HistoryRender.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  deleteScore: PropTypes.func.isRequired,
  drillId: PropTypes.string.isRequired,
  primaryAction: PropTypes.func.isRequired,
  getDrillScoreAverage: PropTypes.func.isRequired,
  getDrillScoreObj: PropTypes.func.isRequired
}

export default HistoryRender;
