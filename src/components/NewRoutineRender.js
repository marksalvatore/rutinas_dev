import React from 'react';
import PropTypes from 'prop-types';

import Drill from './Drill';
import DrillListTitle from './DrillListTitle';
import Nav from './Nav';

const NewRoutineRender = (props) => {
 
  return (
      <section className="NewRoutine">

        <Nav />

        <h2>New Routine</h2>

        <div className="wrapper">

          <ul className="frame dropShadow anim-slideUpExpand">
             { Object
               .keys(props.drills)
               .map(key => 
                 <Drill  
                   key={props.drills[key].id}
                   id={props.drills[key].id}

                   details={props.drills[key]}
                   isDrillSelected={props.isDrillSelected}
                   index={key}
                   toggleSelectItem={props.toggleSelectItem}
                   />)
             }
           </ul>

           <ul className="frame-list">
               <div className="frame-list-title">Selected Drills</div>
               {props.selectedDrills.map( key => 
                   <DrillListTitle 
                     key={key.id}
                     id={key.id}
                     title={key.title}
                   />)
               }
               <div className="wrapper">
                 <button className="btn-primary" onClick={props.primaryAction}>Save Routine</button>
               </div>
           </ul>
        </div>

      </section> 
  );

}

NewRoutineRender.contextTypes = {
  router: React.PropTypes.object
}

NewRoutineRender.propTypes = {
  drills: PropTypes.array.isRequired,
  isDrillSelected: PropTypes.func.isRequired,
  primaryAction: PropTypes.func.isRequired,
  selectedDrills: PropTypes.array.isRequired,
  toggleSelectItem: PropTypes.func.isRequired
}

export default NewRoutineRender;
