import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

class ScoreRender extends React.Component {

  render() {
    return (
      <section className="Score">

        <Nav />

        <h2>{this.props.drillTitle}</h2>
        
        <form onSubmit={(e) => this.props.primaryAction(e)}>
          <input type="number" ref={(input) => this.points = input} placeholder="points" autoFocus={true} />
          <input type="number" ref={(input) => this.attempts = input} placeholder="attempts"/>
          <div className="button-group">
            <button type="button" className="btn-cancel" onClick={this.props.cancelAction}>Back</button>
            <button type="submit">Save Score</button>
          </div>           
        </form>
        
        <button type="button" className="btn-secondary" onClick={this.props.secondaryAction}>Drill Setup</button>     
      </section>    
    )
  }
}

ScoreRender.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  drillTitle: PropTypes.string.isRequired,
  secondaryAction: PropTypes.func.isRequired,
  primaryAction: PropTypes.func.isRequired
}

export default ScoreRender;
