import React from 'react';
import PropTypes from 'prop-types';

import '../css/ButtonGroup.css';

// Composed component function 
const ButtonGroup = (props) => {
	let cancelButton, saveButton, miscButton = null;

	if(props.cancelAction) {
		cancelButton = <button type="button" className="btn-secondary" onClick={props.cancelAction}>{props.cancelLabel}</button>
	}
	if(props.miscAction) {
		miscButton = <button type="button" onClick={props.miscAction}>{props.miscLabel}</button>
	}
	if(props.saveAction) {
		saveButton = <button type="button" onClick={props.saveAction}>{props.saveLabel}</button>
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
  saveAction: PropTypes.func,
  cancelAction: PropTypes.func,
  miscButton: PropTypes.func,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  miscLabel: PropTypes.string
};

export default ButtonGroup;
