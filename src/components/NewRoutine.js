import React from 'react';

import '../css/NewRoutine.css';
import drillsData from '../../data-drills.json';
import NewRoutineRender from './NewRoutineRender';

import { storeObject } from '../helpers';

class NewRoutine extends React.Component {
  constructor() {
    super();

    this.isDrillSelected = this.isDrillSelected.bind(this);
    this.loadDrills = this.loadDrills.bind(this);
    this.makeNewRoutineObj = this.makeNewRoutineObj.bind(this);
    this.toggleSelectItem = this.toggleSelectItem.bind(this);
    this.primaryAction = this.primaryAction.bind(this);

    this.state = {
      drills: {},
      routines: {},
      selectedDrills: []
    };
  }

  componentWillMount() {
    this.loadDrills();
  }

  isDrillSelected(id) {
    const drillExists = this.state.selectedDrills.filter( obj => obj.id === id);
    
    if(drillExists.length) {
      return true;
    } else {
      return false;
    }
  }

  loadDrills() {
    storeObject('drills', drillsData);
    this.setState({drills: drillsData});
    console.log('Drills loaded from json file');

    /*REMOVED TEMPORARILY*/

    /*if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      this.setState({drills: drillsData});
      console.log('Drills loaded from json file');
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
      console.log('Drills loaded from localStorage');
    }*/


    return true;
  }

  makeNewRoutineObj() {
    // use timestamp for unique id
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const substring = id.substr(id.length - 4);

    const newRoutine = {
      "id": `${id}`,
      "title" : `Routine::${substring}`,
      "rDrills": this.state.selectedDrills
    }
    return newRoutine;
  }

  toggleSelectItem(e) {
    const id = e.target.dataset.id;
    const index = e.target.dataset.index; // index in drills

    const drills = this.state.drills;
    let drillItem = null;
    let selectedDrills = null;
    let selectedDrillsCurrent = [...this.state.selectedDrills];

    const alreadySelected = this.isDrillSelected(id);

    // if drill exists, remove it, else prepare its id and title for push
    if(alreadySelected) {
      selectedDrills = selectedDrillsCurrent.filter(obj => obj.id !== id);

    } else {

      drillItem = {
        id: id,
        title: drills[index].title
      }
      selectedDrillsCurrent.push(drillItem);
      selectedDrills = [...selectedDrillsCurrent];
    }

    this.setState({ selectedDrills });
  }

  primaryAction() {
    if ( this.state.selectedDrills.length > 0 ) {
      const newRoutineObj = this.makeNewRoutineObj();
      this.storeNewRoutine(newRoutineObj);

      // go to new routine page
      this.context.router.transitionTo(`/routines`);
    }
  }

  render() {
    return (
      <NewRoutineRender 
        drills={[...this.state.drills]}
        isDrillSelected={this.isDrillSelected}
        primaryAction={this.primaryAction}
        selectedDrills={[...this.state.selectedDrills]}
        toggleSelectItem={this.toggleSelectItem}
      />
    )
  }
}

// Allows using the parent router in methods that need to link to another component
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
