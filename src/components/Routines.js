import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';
import RoutineListItem from './RoutineListItem';
import { getStoredObject, storeObject } from '../helpers';


class Routines extends React.Component {
  constructor() {
    super();

    this.loadRoutines = this.loadRoutines.bind(this);
    this.editRoutine = this.editRoutine.bind(this);
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

  editRoutine(e) {
    const id = e.target.dataset.id
    this.context.router.transitionTo(`/routine/${id}`);
  }

  deleteRoutine(e) {
    const id = e.target.dataset.id // routine id
    let storedRoutines = getStoredObject("routines");
    //delete this routine by not returning it
    let remainingStoredRoutines = storedRoutines.filter(item => item.id !== id);
    storeObject("routines", remainingStoredRoutines);
    this.setState({ routines : remainingStoredRoutines });
    console.log("Deleted Routine: ", id);
  }


  render() {
    return (
        <div className="Page">

    	  <Nav />

          <div className="Page-title">My Routines</div>
          <div className="Page-text">[ + <Link to="/new">Add Routine</Link> ]
      
            <ul className="List">
                { Object
                    .keys(this.state.routines)
                    .map(key => 
                    <RoutineListItem 
                      key={key} 
                      details={this.state.routines[key]}
                      deleteRoutine={this.deleteRoutine}
                      editRoutine={this.editRoutine}
                      />)
                }
            </ul>
          </div>
    	</div>
    )
  }
}

// Allows using the parent router for methods that need to link to another page
// See saveAction() and cancelAction()
Routines.contextTypes = {
  router: React.PropTypes.object
}

export default Routines;
