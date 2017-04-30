/* eslint-disable */
import React from 'react';

import ButtonGroup from './ButtonGroup';
import Nav from './Nav';

class SaveRender extends React.Component {
 
  render() {
    return (
    	<section className="Save">

        <Nav />

        <h2 className="anim-vibrate">Saved!</h2>
        <div className="text-left">
          <p>Your scored <strong>{Math.floor(this.props.recentScore * 100)}%</strong> for this drill.</p>
          <p>Your running average score for this drill so far is <strong>{Math.floor(this.props.averageScore * 100)}%</strong>.</p>
        </div>

        <ButtonGroup saveLabel="History" saveAction={this.props.saveAction} cancelLabel="Back" cancelAction={this.props.cancelAction} />

    	</section>
    )
  }
}

export default SaveRender;
