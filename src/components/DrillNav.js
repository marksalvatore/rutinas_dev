import React from 'react';
import { Link } from 'react-router';

class DrillNav extends React.Component {
  render() {
    return (
    	<div className="Nav">
    	  <div className="Nav-item"><Link to="/routine">Cancel</Link></div>
    	  <div className="Nav-item"><Link to="/score">Enter Score</Link></div>
    	</div>
    )
  }
}

export default DrillNav;
