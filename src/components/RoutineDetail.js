import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

class RoutineDetail extends React.Component {
  render() {
    return (
      <div className="Page">

        <Nav />
        
        <div className="Page-title">my routine</div>
        <div className="Page-subtitle">Drills for this routine:</div>
          <ul className="List">

              <li className="Item"><Link to="/drill/:id">Saftey Drill 1</Link></li>
              <li className="Item"><Link to="/drill">Saftey Drill 2</Link></li>
              <li className="Item"><Link to="/drill">Saftey Drill 3</Link></li>
              <li className="Item"><Link to="/drill">Saftey Drill 4</Link></li>
          </ul>

    	</div>
    )
  }
}

export default RoutineDetail;
