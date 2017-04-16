import React from 'react';

import Nav from './Nav';
import ButtonGroup from './ButtonGroup';
import drillDiagram from '../../public/images/fund-2.svg';
import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';

class DrillDetail extends React.Component {
  constructor() {
    super();

    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);
    this.getDrillValue = this.getDrillValue.bind(this);
    this.loadDrills = this.loadDrills.bind(this);

    this.state = {
      drills: {}
    };
  }

  componentWillMount() {
    this.loadDrills();
  }

  loadDrills() {
    // load from localStorage, else from json
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      this.setState({drills: drillsData});
      console.log('Drills loaded from json file');
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
      console.log('Drills loaded from localStorage');
    }
  }

  getDrillValue(val) {
    let arr = this.state.drills;
    let id = this.props.params.id;
    let obj = arr.find( obj => obj.id === id);
    return obj[val];
  }

  saveAction() {
    //console.log("Entering score now");
    // we'll have to pass in an id later
    this.context.router.transitionTo(`/score`);
  }

  cancelAction() {
    history.back();
  }

  render() {
    return (
    	<div className="Page">

        <Nav />

        <div className="Page-title">{this.getDrillValue('title')}</div>
        <img className="drill-diagram" src={drillDiagram} alt="drill" />

        <div className="Page-subtitle">Rules</div>
        <div className="Page-text">
          <p>{this.getDrillValue('rules')}</p>
        </div>

        <div className="Page-subtitle">Scoring</div>
        <div className="Page-text">
          <p>{this.getDrillValue('scoring')}</p>
        </div>

        <ButtonGroup saveLabel="Enter Score" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />

      </div>
    )
  }
}

DrillDetail.contextTypes = {
  router: React.PropTypes.object
}


export default DrillDetail;
