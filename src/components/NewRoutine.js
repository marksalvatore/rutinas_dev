import React from 'react';

import '../css/NewRoutine.css';
import drillsData from '../data-drills.json';
import NewRoutineRender from './NewRoutineRender';

import { storeObject, getStoredObject } from '../helpers';

class NewRoutine extends React.Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.getRemainingRoutineTitles = this.getRemainingRoutineTitles.bind(this);
    this.getTitlesForSelect = this.getTitlesForSelect.bind(this);
    this.isDrillSelected = this.isDrillSelected.bind(this);
    this.loadDrills = this.loadDrills.bind(this);
    this.makeNewRoutineObj = this.makeNewRoutineObj.bind(this);
    this.routinesCount = this.routinesCount.bind(this);
    this.storeNewRoutine = this.storeNewRoutine.bind(this);
    this.toggleSelectItem = this.toggleSelectItem.bind(this);
    this.primaryAction = this.primaryAction.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateDefaultRoutineTitle = this.updateDefaultRoutineTitle.bind(this);
    this.updateRoutineTitle = this.updateRoutineTitle.bind(this);

    this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    this.state = {
      drills: {},
      routines: {},
      selectedDrills: [],
      routineTitle: 'Monday',
      selectedCategory: 'all'
    };
  }

  componentWillMount() {
    this.loadDrills();
    this.updateDefaultRoutineTitle();
  }

  getCategories() {
    const allDrills = getStoredObject('drills');
    let categories = [];
    if(allDrills) {
       for(let d of allDrills){
         // filter out categories you don't want right now
         if( d.category !== 'cut' && d.category !== 'classic') {
           console.log(d.category);
           categories.push(d.category);
         }
       }
    }
    // Strip out dupes and sort
    categories = [...new Set(categories)].sort();
    return categories;
  }

  getRemainingRoutineTitles() {
    // Returns array of days of week not yet selected for the title of a routine
    const allRoutines = getStoredObject('routines');
    let usedTitles = [];
    let remainingRoutineTitles = [];

    if(allRoutines) {

      for(let routine of allRoutines) {
        usedTitles.push(routine.title);
      }

      for(let day of this.daysOfWeek) {
        let foundDay = null;
        foundDay = usedTitles.filter(used => used === day);
        if(!foundDay.length) {
          remainingRoutineTitles.push(day);
        }
      }
    }

    if(!remainingRoutineTitles.length) {
      remainingRoutineTitles = this.daysOfWeek;
    }

    return remainingRoutineTitles;
  }

  getTitlesForSelect() {
    const remainingTitles = this.getRemainingRoutineTitles();
    let titles = [];

    if(remainingTitles.length) {
      titles = remainingTitles;
    } else {
      titles = this.daysOfWeek;
    }
    return titles;
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
    if(!getStoredObject('drills')) {
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
    const timestampId = Date.now();
    const newRoutine = {
      id: `routine-${timestampId}`,
      "title" : this.state.routineTitle,
      "rDrills": this.state.selectedDrills
    }
    return newRoutine;
  }

  routinesCount() {
    const allRoutines = getStoredObject('routines');
    if(allRoutines !== null && allRoutines.length) {
      return allRoutines.length;
    } else {
      return 0;
    }
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

  updateCategory(e) {
    let selectedCategory = e.target.dataset.category;
    this.setState({ selectedCategory });
  }

  updateRoutineTitle(e) {
    e.preventDefault();
    const routineTitle = e.target.value;
    this.setState({ routineTitle });
  }

  updateDefaultRoutineTitle() {
    const remainingDays = this.getRemainingRoutineTitles();
    if(remainingDays.length) {
      this.setState({ routineTitle: remainingDays[0]});
    } 
  }

  render() {
    let titlesForSelect = this.getTitlesForSelect();
    let routinesCount = this.routinesCount();
    let categories = this.getCategories();

    return (
      <NewRoutineRender 
        categories={categories}
        drills={[...this.state.drills]}
        isDrillSelected={this.isDrillSelected}
        primaryAction={this.primaryAction}
        routineTitle={this.state.routineTitle}
        routinesCount={routinesCount}
        selectedCategory={this.state.selectedCategory}
        selectedDrills={[...this.state.selectedDrills]}
        titlesForSelect={titlesForSelect}
        toggleSelectItem={this.toggleSelectItem}
        updateCategory={this.updateCategory}
        updateRoutineTitle={this.updateRoutineTitle}
      />
    )
  }
}

// Allows using the parent router in methods that need to link to another component
NewRoutine.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutine;
