import React from 'react';
//import PropTypes from 'prop-types';

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

ButtonGroup.propTypes = {
/*  saveAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  miscButton: PropTypes.func,
  saveLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string.isRequired,
  miscLabel: PropTypes.string*/
};

export default ButtonGroup;
