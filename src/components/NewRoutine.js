import React from 'react';
import { BrowserRouter } from 'react-router'

import drill1 from '../../public/images/fund-1.svg';
import drill2 from '../../public/images/fund-2.svg';
import drill3 from '../../public/images/fund-3.svg';
import drill4 from '../../public/images/fund-4.svg';

import DrillFilter from './DrillFilter';
import ButtonGroup from './ButtonGroup';

class NewRoutine extends React.Component {
  constructor() {
      super();

      this.saveAction = this.saveAction.bind(this);
      this.cancelAction = this.cancelAction.bind(this);
  }

  saveAction() {
      //console.log("Saving a new routine now");
      // we'll have to pass in an id later
      this.context.router.transitionTo(`/routines`);

  }

  cancelAction() {
      //console.log("Canceling new routine");
      this.context.router.transitionTo(`/`);

  }

  render() {
    return (
    	<div className="Page">

        <DrillFilter />

    	  <div className="drill-frame-wrapper">
             <div className="drill-frame-instr">
                 Select drills for new Routine
             </div>
             <div className="drill-frame">
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Speed Control
                    </div>
                    <img src={drill1} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Straight Stroke
                    </div>
                    <img src={drill2} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Short Straight Stop
                    </div>
                    <img src={drill3} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Long Straight Stop
                    </div>
                    <img src={drill4} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
             </div>
    	  </div>

        <ButtonGroup saveLabel="Save Routine" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />
    	</div>
    )
  }
}

NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
