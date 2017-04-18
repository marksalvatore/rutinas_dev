import React from 'react';

import DrillDetail from './DrillDetail';
import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';

class DrillDetailContainer extends React.Component {
  constructor() {
    super();

    this.loadDrills = this.loadDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);
    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);

    this.state = {
      drills: {},
      drill: {}
    };
  }

  componentWillMount() {
    this.loadDrills();
  }

  loadDrills() {
    // load from json, or storage if already loaded
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      this.setDrill(drillsData);
      console.log('Drill set from JSON:'); 

    } else {
      this.setDrill(getStoredObject('drills')); 
      console.log('Drill is set from Storage:');
    }
  }

  setDrill(drills) {
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill }, function(){
      console.log(this.state.drill);
    });
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
