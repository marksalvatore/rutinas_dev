import React from 'react';

import Nav from './Nav';
import RoutineListItem from './RoutineListItem';

class Routines extends React.Component {

  render() {
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
      </section>
    )
  }
}

export default Routines;
