import React from 'react';

import DrillListItem from './DrillListItem';
import Nav from './Nav';

class RoutineDetailRender extends React.Component {

  render() {
    return (
      <section className="RoutineDetail">

        <Nav />
        
        <h2>{this.props.getRoutineValue('title')}</h2>
        
          <ul className="text-center anim-pullDown">
          { Object
              .keys(this.props.routineDrills)
              .map(key => 
              <DrillListItem 
                key={key} 
                details={this.props.routineDrills[key]} 
                goToDrill={this.props.goToDrill}
                deleteDrill={this.props.deleteDrill}
                getHistory={this.props.getHistory}
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
