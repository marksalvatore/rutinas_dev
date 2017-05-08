import React from 'react';
import PropTypes from 'prop-types';

import '../css/ButtonGroup.css';

// Composed component function 
const ButtonGroup = (props) => {
	let cancelButton, primaryButton, secondaryButton = null;

	if(props.cancelAction) {
		cancelButton = <button type="button" className="btn-cancel" onClick={props.cancelAction}>{props.cancelLabel}</button>
	}
	if(props.primaryAction) {
		primaryButton = <button type="button" className="btn-primary" onClick={props.primaryAction}>{props.primaryLabel}</button>
	}
	if(props.secondaryAction) {
		secondaryButton = <button type="button" className="btn-secondary" onClick={props.secondaryAction}>{props.extraLabel}</button>
	}

  return (
		<div className="button-group">
			{cancelButton}
			{secondaryButton}
			{primaryButton}
		</div>    
	)
}

ButtonGroup.propTypes = {
  primaryAction: PropTypes.func,
  cancelAction: PropTypes.func,
  secondaryButton: PropTypes.func,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  extraLabel: PropTypes.string
};

export default ButtonGroup;
