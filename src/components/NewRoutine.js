import React from 'react';

import '../css/NewRoutine.css';
import drillsData from '../../data-drills.json';
import NewRoutineRender from './NewRoutineRender';

import { storeObject, getStoredObject } from '../helpers';

class NewRoutine extends React.Component {
  constructor() {
    super();

    this.loadDrills = this.loadDrills.bind(this);
    this.makeNewRoutineObj = this.makeNewRoutineObj.bind(this);
    this.toggleSelectItem = this.toggleSelectItem.bind(this);
    this.saveAction = this.saveAction.bind(this);

    this.state = {
      drills: {},
      routines: {},
      selectedDrills: []
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
    const index = e.target.dataset.index;

    let selectedDrillsCopy = [...this.state.selectedDrills];
    let drills = [...this.state.drills];
    let currentlySelected = selectedDrillsCopy.filter(obj => obj.id === id);
    let drillItem = null;
    let selectedDrills = [];

    if ( currentlySelected.length  ) {
      // remove "active" css class by setting selected to false
      drills[index].selected = false;
      this.setState({ drills });

      // remove item from state
      selectedDrills = selectedDrillsCopy.filter(obj => obj.id !== id);

    } else {

      // add "active" css class by setting selected to true
      drills[index].selected = true;
      this.setState({ drills });

      // add item
      drillItem = {
        id: id,
        title: drills[index].title
      }
      selectedDrillsCopy.push(drillItem);
      selectedDrills = [...selectedDrillsCopy];
    }
    
    // Set state and console array in callback, after state gets updated
    this.setState({ selectedDrills }, function(){
      console.log("selectedDrills", selectedDrills);
    }); 
 
  }

  storeNewRoutine(newRoutine) {
    // get routines from storage
    let storedRoutines = getStoredObject("routines");

    if (storedRoutines !== null) {
      // Add new Routine to array
      storedRoutines.push(newRoutine);
      // store the updated set of Routines
      storeObject("routines", storedRoutines);

    } else {
      // Just need to put newRoutine into a one element array before storing
      let arr = [];
      arr[0] = newRoutine;
      storeObject("routines", arr);
    }
  }

  saveAction() {
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
        selectedDrills={[...this.state.selectedDrills]}
        drills={[...this.state.drills]}
        toggleSelectItem={this.toggleSelectItem}
        saveAction={this.saveAction}
      />
    )
  }
}

// Allows using the parent router in methods that need to link to another component
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
