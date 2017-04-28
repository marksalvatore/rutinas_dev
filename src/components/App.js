import React from 'react';

import GetStarted from './GetStarted';
import Routines from './Routines';

class App extends React.Component {
  constructor() {
    super();

    this.isNewUser = this.isNewUser.bind(this);
  }

  isNewUser() {
    // if there are no drills saved to storage, this is a "new" user
    if( !localStorage.getItem('drills')) {
      return true;
    }
    return false;
  }

  render() {
    // Always open to GetStarted until I can learn why isNewUser() seems to work only locally.
    //if ( this.isNewUser() ) {
    if ( true ) {
      console.log("User is new. Load drills from file.");
       return <GetStarted />
    } else {
      console.log("User is returning. Load drills from storage.");
      return <Routines />
    }
  }
}

export default App;
