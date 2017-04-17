import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
    	<div className="Nav">
    	  <div className="Nav-item"><Link to="/home">Home</Link></div>
    	  <div className="Nav-item"><Link to="/info">Info</Link></div>
    	  <div className="Nav-item"><Link to="/routines">My Routines</Link></div>
    	  <div className="Nav-item"><Link to="/new">Build a Routine</Link></div>
    	</div>
    )
  }
}

export default Nav;
