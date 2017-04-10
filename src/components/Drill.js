import React from 'react';

import Nav from './Nav';
import ButtonGroup from './ButtonGroup';
import drill from '../../public/images/fund-2.svg';

class Drill extends React.Component {
  constructor() {
      super();

      this.saveAction = this.saveAction.bind(this);
      this.cancelAction = this.cancelAction.bind(this);
  }

  saveAction() {
      console.log("Entering score now");
  }

  cancelAction() {
      console.log("Canceling score now");
  }


  render() {
    return (
    	<div className="Page">

            <Nav />

            <div className="Page-title">Safety Drill 3</div>
            <img className="drill-diagram" src={drill} alt="drill" />
            <div className="Page-subtitle">Rules</div>
            <div className="Page-text">
            <p>With CB on the head spot and OB on the foot spot, shoot CB straight into OB. The objective is to make OB rebound and strike CB squarely so it rolls back toward the head spot (one straight line).</p>
            </div>
            <div className="Page-subtitle">Scoring</div>
            <div className="Page-text">
            <p>1 point if the OB hits the CB on rebound. 2 points if the OB remains below the CB after it hits the CB. 3 points if the CB travels a straight path toward the head spot after the OB strikes it.</p>            
            <p>1 point if the OB hits the CB on rebound. 2 points if the OB remains below the CB after it hits the CB. 3 points if the CB travels a straight path toward the head spot after the OB strikes it.</p>
            </div>

            <ButtonGroup saveLabel="Enter Score" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />

        </div>
    )
  }
}

export default Drill;
