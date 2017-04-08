import React from 'react';

import Nav from './Nav';

class Save extends React.Component {
  render() {
    return (
    	<div className="Page">

        <Nav />

        <div className="Page-title">Saved!</div>
        <div className="Page-text">
          <p>Your score has been saved. See <strong>statistics</strong> to see how you're progressing.</p>
        </div>



    	</div>
    )
  }
}

export default Save;
