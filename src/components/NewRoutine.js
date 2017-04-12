import React from 'react';

//import dbconnect from '../rebase';
import drills from '../../data-drills.json';
import Drill from './Drill';
import DrillFilter from './DrillFilter';
import ButtonGroup from './ButtonGroup';

class NewRoutine extends React.Component {
  constructor() {
    super();

    this.saveAction = this.saveAction.bind(this);
    this.cancelAction = this.cancelAction.bind(this);
    this.loadDrills = this.loadDrills.bind(this);
    this.makeNewRoutineObj = this.makeNewRoutineObj.bind(this);
    this.StoreObject = this.StoreObject.bind(this);
    this.getStoredObject = this.getStoredObject.bind(this);
    this.getSelectedDrills = this.getSelectedDrills.bind(this);
    //this.storeDrills = this.storeDrills.bind(this);
    //this.getStoredDrills = this.getStoredDrills.bind(this);

    this.state = {
      drills: {},
      routines: {}
    };
  }

  componentWillMount() {
    this.loadDrills();
  }

  // runs when props/state changes ( after set.state() )
  componentWillUpdate(nextProps, nextState) {
    console.log("something changed");
    console.log({nextProps, nextState});
  }

  loadDrills() {
    // load from localStorage, else from json
    if(!localStorage.getItem('drillId')) {
      this.setState({drills: drills});
      //this.storeDrills();
      console.log('populated for first time');
    } 
    else {
      //this.getStoredDrills();
      console.log('taken from localStorage');
    }
  }

  saveAction() {
    const newRoutineObj = this.makeNewRoutineObj();
    const selectedDrills = this.getSelectedDrills();

    // Add selectedDrills array to newRoutineObj


    // go to new routine page
    console.log('going to a specific routine');
    //this.context.router.transitionTo(`/routines/${newRoutineObj.id}`);
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


    // ADD NEW Routine to storage

    // get routines from storage
    let storedRoutines = this.getStoredObject("routines");

    if (storedRoutines !== null) {

      // Add new Routine to array
      storedRoutines.push(newRoutine);
      
      // store the updated set of Routines
      this.StoreObject("routines", storedRoutines);

      console.log(this.getStoredObject('routines'));

    } else {

      // Just need to put newRoutine into a one element array before storing
      let arr = [];
      arr[0] = newRoutine;
      this.StoreObject("routines", arr);
    }

    return newRoutine;
  }

  StoreObject(key, obj) {
      const jsonObject = JSON.stringify(obj);
      localStorage.setItem(key, jsonObject);
  }

  getStoredObject(key) {
      const json_string = localStorage.getItem(key);
      const obj = JSON.parse(json_string)
      return obj;
  }









  getSelectedDrills() {
    console.log("getting selected drills");
  }




/*  storeDrills() {
    // loop array
    for( let drillItem of drills ){ 
      // loop object
      for( let prop of Object.keys(drillItem) ){ 
        let value = drillItem[prop];
        console.log(`${prop}: ${value}`);
        localStorage.setItem(`${prop}`, `${value}`);
      }
    }
  }

  getStoredDrills() {
    console.log('getting storage');
    //var someItem = localStorage.getItem('someItem');
  }


*/
 

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
                   .map(key => <Drill key={key} details={this.state.drills[key]} />)
               }
             </div>
    	  </div>

        <ButtonGroup saveLabel="Save Routine" saveAction={this.saveAction} cancelLabel="Back" cancelAction={this.cancelAction} />
    	</div>
    )
  }
}

// Allows using the parent router for methods that link to another screen
// See saveAction() and cancelAction()
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
