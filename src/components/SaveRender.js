/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from './ButtonGroup';
import Nav from './Nav';

const SaveRender = (props) => {
 
  return (
  	<section className="Save">

      <Nav />

      <h2 className="anim-slideRight">Saved!</h2>
      <div className="text-left">
        <p>Your scored <strong>{Math.floor(props.recentScore * 100)}%</strong> for this drill.</p>
        <p>Your running average score for this drill so far is <strong>{Math.floor(props.averageScore * 100)}%</strong>.</p>
      </div>

      <ButtonGroup extraLabel="History" secondaryAction={props.secondaryAction} cancelLabel="Back" cancelAction={props.cancelAction} />

  	</section>
  );
  
}

SaveRender.propTypes = {
  averageScore: PropTypes.number.isRequired,
  cancelAction: PropTypes.func.isRequired,
  recentScore: PropTypes.number.isRequired,
  secondaryAction: PropTypes.func.isRequired
}

export default SaveRender;
