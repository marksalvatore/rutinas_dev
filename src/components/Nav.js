import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
    	<div className="Nav">
    	  <Link to="/info"><div className="Nav-item">Info</div></Link>
    	  <Link to="/stats"><div className="Nav-item">Stats</div></Link>
    	  <Link to="/routines"><div className="Nav-item">Routines</div></Link>
    	  <Link to="/new" activeClassName="active"><div className="Nav-item">+ New</div></Link>
    	</div>
    )
  }
}

export default Nav;
