import React from 'react';

import Nav from './Nav';

class NotFound extends React.Component {
  render() {
    return (
    	<section className="NotFound">

    	  <Nav />
          
          <h2>Page not found</h2>
          <div className="text-left">
            <p>Whoops!<br /> Ball in hand!</p>
          </div>

    	</section>
    )
  }
}

export default NotFound;
