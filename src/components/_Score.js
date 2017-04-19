import React from 'react';

import Nav from './Nav';
import ButtonGroup from './ButtonGroup';

class Score extends React.Component {

  render() {
    const { drill } = this.props;
    return (

      <div className="Page">

        <Nav />

        <div className="Page-title">{drill.title}</div>
        
        <form onSubmit={(e) => this.props.createScore(e)}>
          <input ref={(input) => this.points = input} type="text" placeholder="Number of points "/>
          <input ref={(input) => this.attempts = input} type="text" placeholder="Number of attempts"/>
          <button onClick={this.props.cancelAction}>Back</button>
          <button type="submit">Save Score</button>
        </form>

        

      </div>
    )
  }
}

Score.contextTypes = {
  router: React.PropTypes.object
}


export default Score;
