import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

class Routines extends React.Component {
  render() {
    return (
        <div className="Page">

    	  <Nav />
          
          <div className="Page-title">My Routines</div>
          <div className="Page-text">
            <ul className="List">
                <li className="Item"><Link to="/routine">Defensive practice</Link></li>
                <li className="Item"><Link to="/routine">Safeties to master</Link></li>
                <li className="Item"><Link to="/routine">Hardest cuts</Link></li>
                <li className="Item"><Link to="/routine">Problem shots</Link></li>
                <li className="Item"><Link to="/routine">Straight stroke!</Link></li>
                <li className="Item"><Link to="/routine">Learning table speed</Link></li>
            </ul>
          </div>


    	</div>
    )
  }
}

export default Routines;
