import React from 'react';
//import { Link } from 'react-router';

import Nav from './Nav';
import drillsData from '../../data-drills.json';
import DrillListItem from './DrillListItem';
import { getStoredObject, storeObject } from '../helpers';

class RoutineDetail extends React.Component {
  // called by: RoutineListItem
  constructor() {
    super();

    this.loadRoutines = this.loadRoutines.bind(this);
    this.loadRoutineDrills = this.loadRoutineDrills.bind(this);
    this.getRoutineValue = this.getRoutineValue.bind(this);
    this.editDrill = this.editDrill.bind(this);
    this.deleteDrill = this.deleteDrill.bind(this);
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
    let arr = this.state.routines;
    // find our routine from routines
    let obj = arr.find( obj => obj.id === id);
    // extract the drills array from that routine
    let routineDrillIds = obj.drillIds;
    let routineDrillObjects = [];
    for( let id of routineDrillIds ){
        // push drill object onto our array from drills
        routineDrillObjects.push(this.state.drills.find( obj => obj.id === id));
    }
    this.setState({ routineDrills: routineDrillObjects }); 
  }

  getRoutineValue(val='id') {
    let arr = this.state.routines;
    let id = this.props.params.id;
    let obj = arr.find( obj => obj.id === id);
    return obj[val];
  }

  goToDrill(e) {
    const id = e.target.dataset.id
    console.log('Going to page id: ', id);
    this.context.router.transitionTo(`/drill/${id}`);
  }

  editDrill(e) {
    const id = e.target.dataset.id
    //this.context.router.transitionTo(`/routine/${id}`);
    console.log("Edited Drill: ", id);
  }

  deleteDrill(e, routineId) {
    /* The drills for a routine are stored with the routine as drillIds[]. They are also kept in state as routineDrills. If you delete a drill, it must be deleted from both places. Code smell! */

    const drillId = e.target.dataset.id // drill id
    let storedRoutines = getStoredObject("routines");
    //console.log("All routines: ", storedRoutines);

    // get the target routine into an array by itself
    let targetRoutineArr = storedRoutines.filter(item => item.id === routineId);
    let targetRoutineObj = targetRoutineArr[0];

    // updatedStoredRoutines contains all routines except the target routine. We'll add it back after deleting the drill from its drillIds array.
    let updatedStoredRoutines = storedRoutines.filter(item => item.id !== routineId);

    // delete the target drill from the drillIds array in the targetRoutineObj
    let editedDrillIds = targetRoutineObj.drillIds.filter(value => value !== drillId);

    // delete the drillIds property from targetRoutineObj
    delete targetRoutineObj.drillIds;
    //console.log(targetRoutineObj);

    // add back the drillIds property to targetRoutineObj set to editedDrillIds
    targetRoutineObj.drillIds = editedDrillIds;

    // add the newly edited routine back to updatedStoredRoutines
    updatedStoredRoutines.push(targetRoutineObj);

    // save set of updated routines to localStorage and state
    storeObject("routines", updatedStoredRoutines);
    this.setState({ routines : updatedStoredRoutines }, function(){
      // make sure to update routineDrills for our child component AFTER routines,
      // because routineDrills get data from routines.
      this.loadRoutineDrills();
    });

    console.log("Deleted Drill: ", drillId, " from Routine: ", routineId);
  }


  render() {
    return (
      <div className="Page">

        <Nav />
        
        <div className="Page-title">{this.getRoutineValue('title')}</div>
        <div className="Page-text">[ + ADD DRILL ]</div>
        
          <ul className="List">
          { Object
              .keys(this.state.routineDrills)
              .map(key => 
              <DrillListItem 
                key={key} 
                details={this.state.routineDrills[key]} 
                goToDrill={this.goToDrill}
                deleteDrill={this.deleteDrill}
                editDrill={this.editDrill}
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
