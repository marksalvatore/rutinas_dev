import React from 'react';

import drillsData from '../../data-drills.json';
import { getStoredObject, storeObject } from '../helpers';
    
class Score extends React.Component {
  constructor() {
    super();

    this.loadDrills = this.loadDrills.bind(this);
    this.saveAction = this.saveAction.bind(this);

    this.state = {
      drills: {}
    };
  }

  componentWillMount() {
    this.loadDrills();
  }

  loadDrills() {
    // load from localStorage, else from json
    if(!localStorage.getItem('drills')) {
      storeObject('drills', drillsData);
      this.setState({drills: drillsData});
      console.log('Drills loaded from json file');
    } 
    else {
      this.setState({drills: getStoredObject('drills')});
      console.log('Drills loaded from localStorage');
    }
  }

  getDrillValue(val) {
    // re-write so this runs only once
    let arr = this.state.drills;
    let id = this.props.params.id;
    let obj = arr.find( obj => obj.id === id);
    return obj[val];
  }

  saveAction() {
    let id = this.props.params.id;
    console.log("I promise I'll save your score for", id);
  }

  render() {
    return (
    	<div className="Page">
 
        <div className="Page-title">{this.getDrillValue('title')}</div>
        <div className="Page-text">
          <p>Attempts:</p>
          <p>Points:</p>
        </div>


    	</div>
    )
  }
}

export default Score;
