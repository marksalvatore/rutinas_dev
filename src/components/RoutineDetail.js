import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';
//import NoItems from './NoItems';
import DrillListItem from './DrillListItem';
import { getStoredObject } from '../helpers';

class RoutineDetail extends React.Component {
  constructor() {
    super();

    this.goToDrill = this.goToDrill.bind(this);

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

  getRoutineTitle() {
    let routineId = this.props.params.routineId;
    let arr = [...this.state.routines];
    let rObj = arr.find( obj => obj.id === routineId);
    return rObj.title;

  }
  goToDrill(e) {
    e.preventDefault();

    //const id = e.target.dataset.id
    //this.context.router.transitionTo(`/drill/${id}`);
  }

  render() {
    
    return (
      <div className="Page">

        <Nav />
        
        <div className="Page-title">{this.getRoutineTitle()}</div>
        <div className="Page-subtitle">Drills for this routine:</div>
          <ul className="List">
             {/* You need to figure out how to get the drill-id from routines
              so in DrillListItem you can link to the drill*/}
              { Object
                  .keys(this.state.routines)
                  .map(key => 
                  <DrillListItem 
                    key={key} 
                    details={this.state.routines[key]} 
                    goToDrill={this.goToDrill}
                   />)
              }
          </ul>
    	</div>
    )
  }
}

// Allows using the parent router for methods that link to another page
// See saveAction() and cancelAction()
RoutineDetail.contextTypes = {
  router: React.PropTypes.object
}

export default RoutineDetail;
