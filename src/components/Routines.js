import React from 'react';

import Nav from './Nav';
//import NoItems from './NoItems';
import RoutineListItem from './RoutineListItem';
import { getStoredObject } from '../helpers';

class Routines extends React.Component {
  constructor() {
    super();

    this.loadRoutines = this.loadRoutines.bind(this);

    this.state = {
      routines: {}
    };
  }

  componentWillMount() {
    this.loadRoutines();
  }

  loadRoutines() {
    if(localStorage.getItem('routines')) {
      this.setState({routines: getStoredObject('routines')});
    }
  }

  render() {
    return (
        <div className="Page">

    	  <Nav />

          <div className="Page-title">My Routines</div>
          <div className="Page-text">
      
            <ul className="List">
                { Object
                    .keys(this.state.routines)
                    .map(key => 
                    <RoutineListItem 
                      key={key} 
                      details={this.state.routines[key]} 
                      />)
                }
            </ul>
          </div>
    	</div>
    )
  }
}

export default Routines;
