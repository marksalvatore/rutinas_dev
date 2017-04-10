import React from 'react';
import { Link } from 'react-router';

class SaveRoutine extends React.Component {
  render() {
    return (
			<div className="button-bar">
				<button className="cancel-routine">Cancel</button>
				<button className="save-routine">Save&nbsp;Routine</button>
			</div>    
		)
  }
}

export default SaveRoutine;
