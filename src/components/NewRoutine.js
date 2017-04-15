import React from 'react';

//import dbconnect from '../rebase';
import drillsData from '../../data-drills.json';
import Drill from './Drill';
import DrillFilter from './DrillFilter';
import ButtonGroup from './ButtonGroup';
import { storeObject, getStoredObject } from '../helpers';

class NewRoutine extends React.Component {
  constructor() {
    super();

    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);
    this.loadDrills = this.loadDrills.bind(this);
    this.makeNewRoutineObj = this.makeNewRoutineObj.bind(this);
    this.toggleSelectItem = this.toggleSelectItem.bind(this);

    this.state = {
      drills: {},
      routines: {},
      selectedDrills: [],
      selectedTags: []
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
      console.log('populated for first time');
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
      console.log('taken from localStorage');
    }
  }

  saveAction() {
    const newRoutineObj = this.makeNewRoutineObj();
    this.storeNewRoutine(newRoutineObj);

    // go to new routine page
    this.context.router.transitionTo(`/routines/${newRoutineObj.id}`);
  }

  cancelAction() {
    this.context.router.transitionTo(`/`);
  }

  makeNewRoutineObj() {
    // use timestamp for unique id
    const timestamp = Date.now();
    const id = `${timestamp}`;
    const newRoutine = {
      "id": `${id}`,
      "title" : `Routine #${timestamp}`
    }

    // Add selectedDrills to newRoutine

    return newRoutine;
  }

  toggleSelectItem(e) {
    console.log(e);
    const id = e.target.dataset.id;
    console.log(id);
    let selectedDrills = [...this.state.selectedDrills];

    if ( this.state.selectedDrills.indexOf(id) !== -1 ) {
      // remove item
      const index = this.state.selectedDrills.indexOf(id);
      selectedDrills.splice(index, 1);

    } else {
      // add item
      selectedDrills.push(id);
    }
    
    // Set state and console array in callback, after state gets updated
    this.setState({ selectedDrills }, function() {
      console.log('selectedDrills: ', this.state.selectedDrills);
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


  render() {
    return (
    	<div className="Page">

        <DrillFilter />

    	  <div className="drill-frame-wrapper">
             <div className="drill-frame-instr">
                 Select drills for new Routine
             </div>
             <div className="drill-frame">
               { Object
                   .keys(this.state.drills)
                   .map(key => 
                     <Drill 
                       key={key} 
                       details={this.state.drills[key]}
                       toggleSelectItem={this.toggleSelectItem}
                       />)
               }
             </div>
    	  </div>

        <ButtonGroup saveLabel="Save Routine" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />
    	</div>
    )
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
