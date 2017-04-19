import React from 'react';

import Nav from './Nav';

class Save extends React.Component {
  render() {
    return (
    	<div className="Page">

        <Nav />

        <div className="Page-title">Saved!</div>
        <div className="Page-text">
          <p>Your scored X for this drill. Your average score for this drill is xx.</p>
        </div>



    	</div>
    )
  }
}

export default Save;
