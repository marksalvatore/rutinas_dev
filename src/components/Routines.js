import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

class Routines extends React.Component {
  constructor() {
    super();

  }


  render() {
    return (
        <div className="Page">

    	  <Nav />
          

          // NEED TO get values from storage and loop over

          
          <div className="Page-title">My Routines</div>
          <div className="Page-text">
            <ul className="List">
                <li className="Item"><Link to="/routine/123">Defensive practice</Link></li>
                <li className="Item"><Link to="/routine/123">Safeties to master</Link></li>
                <li className="Item"><Link to="/routine/123">Hardest cuts</Link></li>
                <li className="Item"><Link to="/routine/123">Problem shots</Link></li>
                <li className="Item"><Link to="/routine/123">Straight stroke!</Link></li>
                <li className="Item"><Link to="/routine/123">Learning table speed</Link></li>
            </ul>
          </div>


    	</div>
    )
  }
}

export default Routines;
