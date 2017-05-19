import React from 'react';

import drillsData from '../data-drills.json';
import '../css/Setup.css';
import SetupRender from './SetupRender';
import { getStoredObject, storeObject } from '../helpers';

class Setup extends React.Component {
  constructor() {
    super();

    this.getDrills = this.getDrills.bind(this);
    this.setDrill = this.setDrill.bind(this);

    this.cancelAction = this.cancelAction.bind(this);

    this.state = {
      drill: {}
    };
  }

  componentWillMount() {
    this.setDrill();
  }

  getDrills() {
    // load from json, or storage if already loaded
    if(!getStoredObject('drills')) {
      storeObject('drills', drillsData);
      return drillsData;

    } else {
      return getStoredObject('drills'); 
    }
  }

  setDrill() {
    let drills = this.getDrills();
    let id = this.props.params.id;
    let drill = drills.find( obj => obj.id === id);
    this.setState({ drill });
  }

  cancelAction() {
    window.history.back();
  }

  render() {
    return (
        <SetupRender
          drill={this.state.drill}
          cancelAction={this.cancelAction}
        />
    )
  }
}

Setup.contextTypes = {
  router: React.PropTypes.object
}


export default Setup;
