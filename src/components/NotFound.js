import React from 'react';

import '../css/NotFound.css';
import Nav from './Nav';

class NotFound extends React.Component {
  render() {
    return (
    	<section className="NotFound">

    	  <Nav />
          
          <h2>Page not found</h2>
          <div className="text-center">
            <p>Whoops!<br /> Ball in hand!</p>
          </div>

    	</section>
    )
  }
}

export default NotFound;
