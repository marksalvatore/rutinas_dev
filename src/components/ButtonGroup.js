import React from 'react';
//import { Link } from 'react-router';

// Composed component function 
const ButtonGroup = (props) => {
	let cancelButton, saveButton, miscButton = null;

	if(props.cancelAction) {
		cancelButton = <button onClick={props.cancelAction}>{props.cancelLabel}</button>
	}
	if(props.miscAction) {
		miscButton = <button onClick={props.miscAction}>{props.miscLabel}</button>
	}
	if(props.saveAction) {
		saveButton = <button onClick={props.saveAction}>{props.saveLabel}</button>
	}

  return (
		<div className="button-group">
			{cancelButton}
			{miscButton}
			{saveButton}
		</div>    
	)
}

export default ButtonGroup;
