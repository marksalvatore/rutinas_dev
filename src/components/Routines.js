import React from 'react';

import '../css/Routines.css';
import RoutinesRender from './RoutinesRender';
import { getStoredObject, storeObject } from '../helpers';

class Routines extends React.Component {
  constructor() {
    super();

    this.addRoutine = this.addRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.loadRoutines = this.loadRoutines.bind(this);

    this.state = {
      routines: {}
    };
  }

  componentWillMount() {
    this.loadRoutines();
  }

  addRoutine() {
    this.context.router.transitionTo('/new');
  }

  deleteRoutine(e) {
    const id = e.target.dataset.id // routine id
    let storedRoutines = getStoredObject("routines");
    let remainingStoredRoutines = storedRoutines.filter(item => item.id !== id);
    storeObject("routines", remainingStoredRoutines);
    this.setState({ routines : remainingStoredRoutines });
    console.log("Deleted Routine: ", id);
  }

  loadRoutines() {
    if(localStorage.getItem('routines')) {
      let routines = getStoredObject('routines');
      this.setState({ routines });
    }
  }

  render() {
    return (
      <RoutinesRender 
        routines={[...this.state.routines]}
        deleteRoutine={this.deleteRoutine}
      />
    )
  }
}

Routines.contextTypes = {
  router: React.PropTypes.object
}

export default Routines;
