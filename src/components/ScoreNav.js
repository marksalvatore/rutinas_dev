import React from 'react';
import { Link } from 'react-router';

class ScoreNav extends React.Component {
  render() {
    return (
    	<div className="Nav">
    	  <div className="Nav-item"><Link to="/save">Save Score</Link></div>
    	</div>
    )
  }
}

export default ScoreNav;
