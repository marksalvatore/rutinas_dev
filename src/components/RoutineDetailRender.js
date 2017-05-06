import React from 'react';

import DrillListItem from './DrillListItem';
import Nav from './Nav';

const RoutineDetailRender = (props) => {

    let title = props.getRoutineValue('title');

    return (
      <section className="RoutineDetail">

        <Nav />
        
        <h2>{title}</h2>
        
          <ul className="text-center anim-pullDown">
          { Object
              .keys(props.routineDrills)
              .map(key => 
              <DrillListItem 
                key={props.routineDrills[key].id} 
                id={props.routineDrills[key].id}
                details={props.routineDrills[key]} 
                goToScore={props.goToScore}
                deleteDrill={props.deleteDrill}
                goToHistory={props.goToHistory}
                goToSetup={props.goToSetup}
                params={props.params}
              />)
          }
          </ul>
          <br />

    	</section>
    ); 
}

export default RoutineDetailRender;
