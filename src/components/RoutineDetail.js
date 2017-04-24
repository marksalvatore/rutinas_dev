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
        this.loadRoutineDrills(); // load after routines, because required
      });
    }
  }

  loadRoutineDrills() {
    let id = this.props.params.id;
    let routines = this.state.routines;
    // find our routine from routines
    let routineObj = routines.find(obj => obj.id === id);
    // extract the drills array from that routine
    let routineDrillIds = routineObj.drillIds;
    let routineDrillObjects = [];
    for( let id of routineDrillIds ){
        // push drill object onto our array from drills
        routineDrillObjects.push(this.state.drills.find(obj => obj.id === id));
    }
    this.setState({ routineDrills: routineDrillObjects }); 
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
    /* The drills for a routine are stored with the routine as drillIds[]. They are also kept in state as routineDrills. If you delete a drill, it must be deleted from both places. Code smell! */

    const drillId = e.target.dataset.id // drill id
    let routineId = this.props.params.id;
    let storedRoutines = getStoredObject("routines");

    // Get the target routine into an object by itself
    let targetRoutineArr = storedRoutines.filter(item => item.id === routineId);
    let targetRoutineObj = targetRoutineArr[0];

    // storedRoutinesLite will contain all routines except our target. We'll add back our target routine after deleting the drill from its drillIds array, if it it has any left.
    let storedRoutinesLite = storedRoutines.filter(item => item.id !== routineId);

    // Delete the target drill from the drillIds array in the targetRoutineObj
    let drillIdsLite = targetRoutineObj.drillIds.filter(value => value !== drillId);

    // Continue processing the targetRoutineObj only if there are drills remaining to warrent re-pushing the routine back onto storedRoutinesLite.
    if( drillIdsLite.length ) {
      // Delete the drillIds property from targetRoutineObj
      delete targetRoutineObj.drillIds;

      // Add back the edited drillIds property to targetRoutineObj and set to drillIdsLite
      targetRoutineObj.drillIds = drillIdsLite;

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
        
        <div className="Page-title">{this.getRoutineValue('title')}</div>
        
          <ul className="List">
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
          </ul>
    	</div>
    )
  }
}

// Allows using the parent router for methods that need to link to another page
// See saveAction() and cancelAction()
RoutineDetail.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineDetail;
