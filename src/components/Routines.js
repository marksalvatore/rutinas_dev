import React from 'react';

import Nav from './Nav';
import Routine from './Routine';
import { getStoredObject } from '../helpers';

class Routines extends React.Component {
  constructor() {
    super();

    this.loadRoutines = this.loadRoutines.bind(this);

    this.state = {
      drills: {},
      routines: {}
    };
  }

  componentWillMount() {
    this.loadRoutines();
  }

  loadRoutines() {
    if(!localStorage.getItem('routines')) {
    } 
    else {
      this.setState({routines: getStoredObject('routines')});
      console.log('Set up routines from local storage');
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
                    <Routine 
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
