import React from 'react';
import { Link } from 'react-router';

class DrillFilter extends React.Component {
  render() {
    return (
    	<div className="Nav">
          <div className="Nav-item active">ALL</div>
    	  <div className="Nav-item">Safeties</div>
    	  <div className="Nav-item">Cuts</div>
    	  <div className="Nav-item">Fundamentals</div>
    	  <div className="Nav-item">Classics</div>
    	</div>
    )
  }
}

export default DrillFilter;
