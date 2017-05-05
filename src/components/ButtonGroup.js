import React from 'react';
import PropTypes from 'prop-types';

import '../css/ButtonGroup.css';

// Composed component function 
const ButtonGroup = (props) => {
	let cancelButton, saveButton, extraButton = null;

	if(props.cancelAction) {
		cancelButton = <button type="button" className="btn-secondary" onClick={props.cancelAction}>{props.cancelLabel}</button>
	}
	if(props.extraAction) {
		extraButton = <button type="button" className="btn-extra" onClick={props.extraAction}>{props.extraLabel}</button>
	}
	if(props.saveAction) {
		saveButton = <button type="button" className="btn-primary" onClick={props.saveAction}>{props.saveLabel}</button>
	}

  return (
		<div className="button-group">
			{cancelButton}
			{extraButton}
			{saveButton}
		</div>    
	)
}

ButtonGroup.propTypes = {
  saveAction: PropTypes.func,
  cancelAction: PropTypes.func,
  extraButton: PropTypes.func,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  extraLabel: PropTypes.string
};

export default ButtonGroup;
