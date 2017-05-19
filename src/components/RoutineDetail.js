import React from 'react';

import '../css/RoutineDetail.css';
import drillsData from '../data-drills.json';
import RoutineDetailRender from './RoutineDetailRender';

import { getStoredObject, storeObject } from '../helpers';

class RoutineDetail extends React.Component {

  constructor() {
    super();

    this.deleteDrill = this.deleteDrill.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.getRoutineValue = this.getRoutineValue.bind(this);
    this.goToHistory = this.goToHistory.bind(this);
    this.goToScore = this.goToScore.bind(this);
    this.goToSetup = this.goToSetup.bind(this);
    this.loadDrills = this.loadDrills.bind(this);
    this.loadRoutines = this.loadRoutines.bind(this);
    this.loadRoutineDrills = this.loadRoutineDrills.bind(this);

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

  deleteDrill(e) {
    /* The drills for a routine are stored with the routine as rDrills[]. They are also loaded into state as routineDrills. If you delete a drill, it must be deleted from both places. */

    const drillId = e.target.dataset.id;
    const routineId = this.props.params.id;
    let storedRoutines = getStoredObject("routines");

    // Get the target routine into an object by itself
    const targetRoutineArr = storedRoutines.filter(obj => obj.id === routineId);
    const targetRoutineObj = targetRoutineArr[0];

    // storedRoutinesLite will contain all routines except the target. We'll put the target back after deleting the drill from its rDrills array, if it it has any left.
    let storedRoutinesLite = storedRoutines.filter(obj => obj.id !== routineId);

    // Delete the target drill from the rDrills array in the targetRoutineObj
    let rDrillsLite = targetRoutineObj.rDrills.filter(obj => obj.id !== drillId);

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

    } else {
      this.deleteRoutine();
    }
  }

  deleteRoutine() {
    let id = this.props.params.id;
    let storedRoutines = getStoredObject("routines");
    //delete this routine by not returning it
    let remainingStoredRoutines = storedRoutines.filter(item => item.id !== id);
    storeObject("routines", remainingStoredRoutines);
    this.setState({ routines : remainingStoredRoutines });
    this.context.router.transitionTo(`/routines`);
  }

  getRoutineValue(objProp='id') {
    // used only to get title of routine
    let routines = this.state.routines;
    let id = this.props.params.id;
    let routineObj = routines.find( obj => obj.id === id);
    return routineObj[objProp];
  }

  goToHistory(e) {
    let id = e.target.dataset.id;
    this.context.router.transitionTo(`/history/${id}`);
  }

  goToScore(e) {
    const id = e.target.dataset.id;
    this.context.router.transitionTo(`/score/${id}`);
  }

  goToSetup(e) {
    const id = e.target.dataset.id;
    this.context.router.transitionTo(`/setup/${id}`);
  }

  loadDrills() {
    // load from localStorage, else from json
    if(!getStoredObject('drills')) {
      storeObject('drills', drillsData);
      this.setState({drills: drillsData});
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
    }
  }

  loadRoutines() {
    if(getStoredObject('routines')) {
      this.setState({routines: getStoredObject('routines')}, function(){
        this.loadRoutineDrills(); // load after routines, because required
        console.log("Routine drills loaded.");
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

  render() {
    return (
      <RoutineDetailRender 
      deleteDrill={this.deleteDrill}
      getRoutineValue={this.getRoutineValue}
      goToHistory={this.goToHistory}
      goToScore={this.goToScore}
      goToSetup={this.goToSetup}
      params={this.props.params}
      routineDrills={[...this.state.routineDrills]}
      />
    )
  }
}

RoutineDetail.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineDetail;
