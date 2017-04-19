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
        
        <p>FORM GOES HERE</p>

    
        <ButtonGroup saveLabel="Save Score" actionToSave={this.props.actionToSave} cancelLabel="Back" actionToCancel={this.props.actionToCancel} />

      </div>
    )
  }
}

Score.contextTypes = {
  router: React.PropTypes.object
}


export default Score;
