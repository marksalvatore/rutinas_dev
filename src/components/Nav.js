import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
    	<div className="Nav">
    	  <div className="Nav-item"><Link to="/info">Help</Link></div>
    	  <div className="Nav-item"><Link to="/stats">Stats</Link></div>
    	  <div className="Nav-item"><Link to="/routines">Routines</Link></div>
    	  {/*<div className="Nav-item"><Link to="/new">Create Routine</Link></div>*/}
    	</div>
    )
  }
}

export default Nav;
