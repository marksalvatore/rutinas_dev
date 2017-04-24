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
    if ( this.isNewUser() ) {
       return <GetStarted />
    } else {
      return <Routines />
    }
  }
}

export default App;
