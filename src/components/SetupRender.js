import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from './ButtonGroup';
import Nav from './Nav';

const SetupRender = (props) => {

  const { drill } = props;

  return (
    <section className="Setup">

      <Nav />

      <h2>{drill.title}</h2>
      <img className="diagram" src={drill.url} alt={drill.title} />

      <h3>Rules</h3>
      <div className="text-left">
        <p dangerouslySetInnerHTML={{__html: drill.rules}}></p>
      </div>

      <h3>Scoring</h3>
      <div className="text-left">
        <p dangerouslySetInnerHTML={{__html: drill.scoring}}></p>
      </div>
      
      <ButtonGroup cancelLabel="Back" cancelAction={props.cancelAction} />
    </section>
  );
  
}

SetupRender.contextTypes = {
  router: React.PropTypes.object
}

SetupRender.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  drill: PropTypes.object.isRequired
}


export default SetupRender;
