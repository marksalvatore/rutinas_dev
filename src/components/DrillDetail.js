import React from 'react';

import Nav from './Nav';
import ButtonGroup from './ButtonGroup';

class DrillDetail extends React.Component {
  render() {
    const { drill } = this.props;
    return (

      <div className="Page">

        <Nav />

        <div className="Page-title">{drill.title}</div>
        <img className="drill-diagram" src={drill.url} alt={drill.title} />

        <div className="Page-subtitle">Rules</div>
        <div className="Page-text">
        <p>{drill.rules}</p>
        </div>

        <div className="Page-subtitle">Scoring</div>
        <div className="Page-text">
        <p>{drill.scoring}</p>
        </div>

        <ButtonGroup saveLabel="Enter Score" actionToSave={this.props.actionToSave} cancelLabel="Back" actionToCancel={this.props.actionToCancel} />

      </div>
    )
  }
}

DrillDetail.contextTypes = {
  router: React.PropTypes.object
}


export default DrillDetail;
