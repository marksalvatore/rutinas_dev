import React from 'react';

import drillsData from '../../data-drills.json';
import '../css/DrillDetail.css';
import DrillDetail from './DrillDetail';
import { getStoredObject, storeObject } from '../helpers';

class DrillDetailContainer extends React.Component {
  constructor() {
    super();

    this.getDrills = this.getDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);

    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);

    this.state = {
      drill: {}
    };
  }

  componentWillMount() {
    this.setDrill();
  }

  getDrills() {
    // load from json, or storage if already loaded
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      return drillsData;

    } else {
      return getStoredObject('drills'); 
    }
  }

  setDrill() {
    let drills = this.getDrills();
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill });
  }

  saveAction() {
    let id = this.props.params.id;
    this.context.router.transitionTo(`/score/${id}`);
  }

  cancelAction() {
    history.back();
  }

  render() {
    return (
        <DrillDetail 
          drill={this.state.drill}
          saveAction={this.saveAction}
          cancelAction={this.cancelAction}
        />
    )
  }
}

DrillDetailContainer.contextTypes = {
  router: React.PropTypes.object
}


export default DrillDetailContainer;
