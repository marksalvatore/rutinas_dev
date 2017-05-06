/* eslint-disable */
import React from 'react';

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

      <ButtonGroup saveLabel="History" saveAction={props.saveAction} cancelLabel="Back" cancelAction={props.cancelAction} />

  	</section>
  );
  
}

export default SaveRender;
