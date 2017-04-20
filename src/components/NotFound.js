import React from 'react';
import Nav from './Nav';

class NotFound extends React.Component {
  render() {
    return (
    	<div className="Page">

    	  <Nav />
          
          <div className="Page-title">Page not found</div>
          <div className="Page-subtitle">
            <p>Whoops!<br /> What was that? ...a mis-cue?</p>
          </div>


    	</div>
    )
  }
}

export default NotFound;
