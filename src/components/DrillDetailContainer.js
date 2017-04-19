import React from 'react';

import DrillDetail from './DrillDetail';
import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';

class DrillDetailContainer extends React.Component {
  constructor() {
    super();

    this.getDrills = this.getDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);
    this.actionToSave = this.actionToSave.bind(this);
    this.actionToCancel = this.actionToCancel.bind(this);

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
      console.log('Drill set from JSON:'); 
      return drillsData;

    } else {
      console.log('Drill is set from Storage:');
      return getStoredObject('drills'); 
    }
  }

  setDrill() {
    let drills = this.getDrills();
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill }, function(){
      console.log(this.state.drill);
    });
  }

  actionToSave() {
    let id = this.props.params.id;
    this.context.router.transitionTo(`/score/${id}`);
  }

  actionToCancel() {
    history.back();
  }

  render() {
    return (
        <DrillDetail 
          drill={this.state.drill}
          actionToSave={this.actionToSave}
          actionToCancel={this.actionToCancel}
        />
    )
  }
}

DrillDetailContainer.contextTypes = {
  router: React.PropTypes.object
}


export default DrillDetailContainer;
