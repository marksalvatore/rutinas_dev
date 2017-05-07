import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

class ScoreRender extends React.Component {

  render() {
    return (
      <section className="Score">

        <Nav />

        <h2>{this.props.drillTitle}</h2>
        
        <form onSubmit={(e) => this.props.saveAction(e)}>
          <input type="number" ref={(input) => this.points = input} placeholder="points" autoFocus={true} />
          <input type="number" ref={(input) => this.attempts = input} placeholder="attempts"/>
          <div className="button-group">
            <button type="button" className="btn-secondary" onClick={this.props.cancelAction}>Back</button>
            <button type="submit">Save Score</button>
          </div>

           
        </form>
           <button type="button" className="btn-extra" onClick={this.props.extraAction}>Drill Setup</button>     

      </section>    
    )
  }
}

ScoreRender.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  drillTitle: PropTypes.string.isRequired,
  extraAction: PropTypes.func.isRequired,
  saveAction: PropTypes.func.isRequired
}

export default ScoreRender;
