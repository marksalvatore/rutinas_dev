import React from 'react';

//import dbconnect from '../rebase';
import drillsData from '../../data-drills.json';
import Drill from './Drill';
//import Nav from './Nav';
//import DrillFilter from './DrillFilter';
import ButtonGroup from './ButtonGroup';
import DrillListTitle from './DrillListTitle';
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
  }

  saveAction() {
    if ( this.state.selectedDrills.length > 0 ) {
      const newRoutineObj = this.makeNewRoutineObj();
      this.storeNewRoutine(newRoutineObj);

      // go to new routine page
      this.context.router.transitionTo(`/routines`);
    }
  }

  cancelAction() {
    this.context.router.transitionTo(`/`);
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
    let alreadySelected = selectedDrillsCopy.filter(obj => obj.id === id);
    console.log("id", id);
    console.log("index", index);
    console.log("alreadySelected: ", alreadySelected);

    let drillItem = null;
    let selectedDrills = [];

    if ( alreadySelected.length  ) {
      console.log("alreadySelected.length", alreadySelected.length);
      // remove "active" css class by setting selected to false
      drills[index].selected = false;
      this.setState({ drills });

      // remove item from state
      selectedDrills = selectedDrillsCopy.filter(obj => obj.id !== id);

    } else {

      // add "active" css class by setting selected to true
      drills[index].selected = true;
      this.setState({ drills });
      console.log("Set " + id + " .selected to TRUE");
      console.log("Set drills to state: ", this.state.drills);

      // add item
      drillItem = {
        id: id,
        title: drills[index].title
      }
      console.log("drillItem", drillItem);
      console.log("selectedDrillsCopy before push: ", selectedDrillsCopy);
      selectedDrillsCopy.push(drillItem);
      console.log("selectedDrillsCopy after push: ", selectedDrillsCopy);
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


  render() {
    let selectedDrills = [...this.state.selectedDrills];

    return (
    	<div className="Page">

        {/*<Nav />*/}
        {/*<DrillFilter />*/}

        <h3>Select drills for Routine</h3>

        <div className="drill-frame-wrapper">
          <div className="drill-frame dropShadow">
             { Object
                 .keys(this.state.drills)
                 .map(key => 
                   <Drill 
                     key={key} 
                     index={key}
                     details={this.state.drills[key]}
                     toggleSelectItem={this.toggleSelectItem}
                     />)
             }
           </div>

           <div className="drill-frame-list">
             <ul>
               {
                 selectedDrills.map( key => 
                   <DrillListTitle 
                     key={key.id}
                     id={key.id}
                     title={key.title}
                   />)

               }
             </ul>
           </div>
    	  </div>

        <ButtonGroup saveLabel="Save Routine" saveAction={this.saveAction} cancelLabel="Cancel" cancelAction={this.cancelAction} />
    	</div>
    )
  }
}

// Allows using the parent router for methods that need to link to another page
// See saveAction() and cancelAction()
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
