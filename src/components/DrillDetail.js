import React from 'react';

import Nav from './Nav';
import ButtonGroup from './ButtonGroup';

class DrillDetail extends React.Component {
  render() {
    const { drill } = this.props;
    return (

      <div className="Page">

        <Nav />

        <h2 className="titleHeading">{drill.title}</h2>
        <img className="drill-diagram" src={drill.url} alt={drill.title} />

        <h2 className="heading2 color">Rules</h2>
        <div className="text">
        <p>{drill.rules}</p>
        </div>

        <h2 className="heading2 color">Scoring</h2>
        <div className="text">
        <p>{drill.scoring}</p>
        </div>
        
        <ButtonGroup saveLabel="Enter Score" saveAction={this.props.saveAction} cancelLabel="Back" cancelAction={this.props.cancelAction} />

      </div>
    )
  }
}

DrillDetail.contextTypes = {
  router: React.PropTypes.object
}


export default DrillDetail;
