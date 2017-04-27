import React from 'react';
//import { Link } from 'react-router';

import Nav from './Nav';
import RoutineListItem from './RoutineListItem';
import { getStoredObject, storeObject } from '../helpers';


class Routines extends React.Component {
  constructor() {
    super();

    this.loadRoutines = this.loadRoutines.bind(this);
    this.addRoutine = this.addRoutine.bind(this);
    this.deleteRoutine = this.deleteRoutine.bind(this);

    this.state = {
      routines: {}
    };
  }

  componentWillMount() {
    this.loadRoutines();
  }

  loadRoutines() {
    if(localStorage.getItem('routines')) {
      let routines = getStoredObject('routines');
      this.setState({ routines });
    }
  }

  deleteRoutine(e) {
    const id = e.target.dataset.id // routine id
    let storedRoutines = getStoredObject("routines");
    let remainingStoredRoutines = storedRoutines.filter(item => item.id !== id);
    storeObject("routines", remainingStoredRoutines);
    this.setState({ routines : remainingStoredRoutines });
    console.log("Deleted Routine: ", id);
  }

  addRoutine() {
    this.context.router.transitionTo('/new');
  }

  render() {

    return (
        <div className="Page">

          <Nav />

          <h2 className="titleHeading">All Routines</h2>

            <ul className="list-equalLength">
                { Object
                    .keys(this.state.routines)
                    .map(key => 
                      
                    <RoutineListItem 
                      key={key} 
                      details={this.state.routines[key]}
                      deleteRoutine={this.deleteRoutine}
                      />)
                }
            </ul>
      </div>
    )
  }
}

// Allows using the parent router for methods that need to link to another component
// See addRoutine()
Routines.contextTypes = {
  router: React.PropTypes.object
}

export default Routines;
