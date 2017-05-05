import React from 'react';

import Drill from './Drill';
import DrillListTitle from './DrillListTitle';
import Nav from './Nav';

class NewRoutineRender extends React.Component {

  render() {
 
    return (
        <section className="NewRoutine">

          <Nav />

          <h2>New Routine</h2>

          <div className="wrapper">

            <ul className="frame dropShadow anim-slideUpExpand">
               { Object
                 .keys(this.props.drills)
                 .map(key => 
                   <Drill 
                     key={key} 
                     index={key}
                     details={this.props.drills[key]}
                     toggleSelectItem={this.props.toggleSelectItem}
                     />)
               }
             </ul>

             <ul className="frame-list">
                 <div className="frame-list-title">Selected Drills</div>
                 {this.props.selectedDrills.map( key => 
                     <DrillListTitle 
                       key={key.id}
                       id={key.id}
                       title={key.title}
                     />)
                 }
                 <div className="wrapper">
                   <button className="btn-primary" onClick={this.props.saveAction}>Save Routine</button>
                 </div>
             </ul>
          </div>

        </section> 
    )
  }
}


NewRoutineRender.contextTypes = {
  router: React.PropTypes.object
}

export default NewRoutineRender;
