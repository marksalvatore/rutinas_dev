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
    e.preventDefault();
    const id = e.target.dataset.id
    console.log('Going to page id: ', id);
    this.context.router.transitionTo(`/drill/${id}`);
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
                />)
          }
          </ul>
    	</div>
    )
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
RoutineDetail.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineDetail;
