import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';
import RoutineListItem from './RoutineListItem';

class Routines extends React.Component {

  render() {
    let messageIfNoRoutines = null;
    if(!this.props.routines.length) {
      messageIfNoRoutines = <p>Click <Link to="/new">+New</Link> to create a routine.</p>
    }
    return (
        <section className="Routines">

          <Nav />

          <h2>All Routines</h2>

            <ul className="text-center">
                { Object
                    .keys(this.props.routines)
                    .map(key => 
                      
                    <RoutineListItem 
                      key={key} 
                      details={this.props.routines[key]}
                      deleteRoutine={this.props.deleteRoutine}
                    />)
                }
            </ul>
            {messageIfNoRoutines}
      </section>
    )
  }
}

export default Routines;
