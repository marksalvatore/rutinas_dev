import React from 'react';

import '../css/Routines.css';
import RoutinesRender from './RoutinesRender';
import { getStoredObject, storeObject } from '../helpers';

class Routines extends React.Component {
  constructor() {
    super();

    this.addRoutine = this.addRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.goToRoutine = this.goToRoutine.bind(this);
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

  goToRoutine(e) {
    e.preventDefault();
    const id = e.target.dataset.id
    this.context.router.transitionTo(`/routine/${id}`);
  }

  loadRoutines() {
    if(getStoredObject('routines')) {
      let routines = getStoredObject('routines');
      this.setState({ routines });
    }
  }

  render() {
    return (
      <RoutinesRender 
        routines={[...this.state.routines]}
        deleteRoutine={this.deleteRoutine}
        goToRoutine={this.goToRoutine}
      />
    );
  }
}

Routines.contextTypes = {
  router: React.PropTypes.object
}

export default Routines;
