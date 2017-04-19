import React from 'react';
//import { Link } from 'react-router';

// Composed component function 
const ButtonGroup = (props) => {
  return (
		<div className="button-group">
			<button onClick={props.actionToCancel}>{props.cancelLabel}</button>
			<button onClick={props.actionToSave}>{props.saveLabel}</button>
		</div>    
	)
}

export default ButtonGroup;
