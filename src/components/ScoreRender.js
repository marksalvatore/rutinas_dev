import React from 'react';

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

 
            <button type="button" className="btn-extra" onClick={this.props.extraAction}>Drill Setup</button>
     
           
        </form>

      </section>    
    )
  }
}

export default ScoreRender;
