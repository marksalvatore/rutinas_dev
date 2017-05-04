import React from 'react';

import ButtonGroup from './ButtonGroup';
import Nav from './Nav';

class DrillSetupRender extends React.Component {
  render() {
    const { drill } = this.props;

    return (
      <section className="DrillSetup">

        <Nav />

        <h2>{drill.title}</h2>
        <img className="diagram" src={drill.url} alt={drill.title} />

        <h3>Rules</h3>
        <div className="text-left">
        <p>{drill.rules}</p>
        </div>

        <h3>Scoring</h3>
        <div className="text-left">
        <p>{drill.scoring}</p>
        </div>
        
        <ButtonGroup cancelLabel="Back" cancelAction={this.props.cancelAction} />
      </section>
    )
  }
}

DrillSetupRender.contextTypes = {
  router: React.PropTypes.object
}


export default DrillSetupRender;
