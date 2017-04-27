import React from 'react';

import Nav from './Nav';

class NotFound extends React.Component {
  render() {
    return (
    	<div className="Page">

    	  <Nav />
          
          <h2 className="heading2">Page not found</h2>
          <div className="text-center">
            <p>Whoops!<br /> Ball in hand!</p>
          </div>

    	</div>
    )
  }
}

export default NotFound;
