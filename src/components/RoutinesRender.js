import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Nav from './Nav';
import RoutineListItem from './RoutineListItem';

const Routines = (props) => {

    let messageIfNoRoutines = null;
    if(!props.routines.length) {
      messageIfNoRoutines = <p>Click <Link to="/new">+New</Link> to create a routine.</p>
    }
    
    return (
      <section className="Routines">

        <Nav />

        <h2>All Routines</h2>

          <ul className="text-center">
              { Object
                  .keys(props.routines)
                  .map(key => 
                    
                  <RoutineListItem 
                    key={props.routines[key].id} 
                    details={props.routines[key]}
                    deleteRoutine={props.deleteRoutine}
                    goToRoutine={props.goToRoutine}
                  />)
              }
          </ul>
          {messageIfNoRoutines}
    </section>
   );
  
}

Routines.propTypes = {
  deleteRoutine: PropTypes.func.isRequired,
  goToRoutine: PropTypes.func.isRequired,
  routines: PropTypes.array.isRequired
}

export default Routines;
