import React from 'react';
//import { Link } from 'react-router';

import Nav from './Nav';
import drillsData from '../../data-drills.json';
import DrillListItem from './DrillListItem';
import { getStoredObject, storeObject } from '../helpers';

class RoutineDetail extends React.Component {
  // child of: RoutineListItem
  constructor() {
    super();

    this.loadDrills = this.loadDrills.bind(this);
    this.loadRoutines = this.loadRoutines.bind(this);
    this.loadRoutineDrills = this.loadRoutineDrills.bind(this);
    this.getRoutineValue = this.getRoutineValue.bind(this);
    this.deleteDrill = this.deleteDrill.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.goToDrill = this.goToDrill.bind(this);

    this.state = {
      routines: {},
      drills: {},
      routineDrills: {}
    };
  }

  componentWillMount() {
    this.loadDrills();
    this.loadRoutines(); // also loads routineDrills
  }

  loadDrills() {
    // load from localStorage, else from json
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      this.setState({drills: drillsData});
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
    }
  }

  loadRoutines() {
    if(localStorage.getItem('routines')) {
      this.setState({routines: getStoredObject('routines')}, function(){
        let result = this.loadRoutineDrills(); // load after routines, because required
        console.log("loadRoutineDrills() completed? ", result);
      });
    }
  }

  loadRoutineDrills() {
    let id = this.props.params.id; // routineId
    let routines = this.state.routines;
    // find this routine from routines
    let routineObj = routines.find(obj => obj.id === id);
    // extract rDrillsArray from that routine
    let rDrillsArray = routineObj.rDrills;
    // loop over ids to find matching object in drills
    let drills = [...this.state.drills];
    let routineDrills = [];
    for( let item of rDrillsArray ) {
      let drillObj = drills.find( obj => obj.id === item.id);
      drillObj = {
       id: drillObj.id,
       title: drillObj.title
      }
      routineDrills.push(drillObj);
    }
    this.setState({ routineDrills }); 
    return true;
  }

  getRoutineValue(objProp='id') {
    // used only to get title of routine
    let routines = this.state.routines;
    let id = this.props.params.id;
    let routineObj = routines.find( obj => obj.id === id);
    return routineObj[objProp];
  }

  getHistory(e) {
    let id = e.target.dataset.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  goToDrill(e) {
    const id = e.target.dataset.id
    console.log('Going to page id: ', id);
    this.context.router.transitionTo(`/drill/${id}`);
  }

  deleteRoutine() {
    let id = this.props.params.id;
    let storedRoutines = getStoredObject("routines");
    //delete this routine by not returning it
    let remainingStoredRoutines = storedRoutines.filter(item => item.id !== id);
    storeObject("routines", remainingStoredRoutines);
    this.setState({ routines : remainingStoredRoutines });
    this.context.router.transitionTo(`/routines`);
    console.log("Deleted Routine: ", id);
  }

  deleteDrill(e) {
    /* The drills for a routine are stored with the routine as rDrills[]. They are also loaded into state as routineDrills. If you delete a drill, it must be deleted from both places. */

    const drillId = e.target.dataset.id;

    console.log("drillId: ", drillId);

    const routineId = this.props.params.id;

    console.log("routineId: ", routineId);

    let storedRoutines = getStoredObject("routines");

    // Get the target routine into an object by itself
    const targetRoutineArr = storedRoutines.filter(obj => obj.id === routineId);
    const targetRoutineObj = targetRoutineArr[0];

    console.log("targetRoutineObj: ", targetRoutineObj);

    // storedRoutinesLite will contain all routines except our target. We'll the target back after deleting the drill from its rDrills array, if it it has any left.
    let storedRoutinesLite = storedRoutines.filter(obj => obj.id !== routineId);

    console.log("storedRoutinesLite: ", storedRoutinesLite);

    // Delete the target drill from the rDrills array in the targetRoutineObj
    let rDrillsLite = targetRoutineObj.rDrills.filter(obj => obj.id !== drillId);

    console.log("rDrillsLite: ", rDrillsLite);

    // If there are any drills left after deleting that last one, push the routine back onto storedRoutinesLite. Otherwise, we don't need the routine anymore. Leaving it out effectively deletes it.
    if( rDrillsLite.length ) {
      // Delete the rDrills property from targetRoutineObj
      delete targetRoutineObj.rDrills;

      // Add back the edited rDrills property to targetRoutineObj and set to rDrillsLite
      targetRoutineObj.rDrills = rDrillsLite;

      // Push the target routine back onto storedRoutinesLite
      storedRoutinesLite.push(targetRoutineObj);

      // Change name of storedRoutinesLite to storedRoutines
      storedRoutines = storedRoutinesLite;

      // Save storedRoutines to localStorage and to state
      storeObject("routines", storedRoutines);
      this.setState({ routines : storedRoutines }, function(){
        // Make sure to update routineDrills for the child component AFTER routines sets state,
        // because routineDrills depends on data from routines.
        this.loadRoutineDrills();
      });
      console.log("Deleted Drill: ", drillId, " from Routine: ", routineId);

    } else {
      this.deleteRoutine();
    }

  }


  render() {

    return (
      <div className="Page">

        <Nav />
        
        <h2 className="titleHeading">{this.getRoutineValue('title')}</h2>
        
          <div className="list">
          { Object
              .keys(this.state.routineDrills)
              .map(key => 
              <DrillListItem 
                key={key} 
                details={this.state.routineDrills[key]} 
                goToDrill={this.goToDrill}
                deleteDrill={this.deleteDrill}
                getHistory={this.getHistory}
                params={this.props.params}
              />)
          }
          </div>
    	</div>
    )
  }
}

// Allows using the parent router for methods that need to link to another component
// See saveAction() and cancelAction()
RoutineDetail.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineDetail;
