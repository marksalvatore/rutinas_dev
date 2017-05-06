import React from 'react';

import DrillListItem from './DrillListItem';
import Nav from './Nav';

class RoutineDetailRender extends React.Component {

  render() {

    let title = this.props.getRoutineValue('title');

    return (
      <section className="RoutineDetail">

        <Nav />
        
        <h2>{title}</h2>
        
          <ul className="text-center anim-pullDown">
          { Object
              .keys(this.props.routineDrills)
              .map(key => 
              <DrillListItem 
                key={key} 
                details={this.props.routineDrills[key]} 
                goToScore={this.props.goToScore}
                deleteDrill={this.props.deleteDrill}
                goToHistory={this.props.goToHistory}
                goToSetup={this.props.goToSetup}
                params={this.props.params}
              />)
          }
          </ul>
          <br />

    	</section>
    )
  }
}

export default RoutineDetailRender;
