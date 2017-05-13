import React from 'react';
import { Link } from 'react-router';

import '../css/GetStarted.css';
import { getStoredObject, storeObject } from '../helpers';

const GetStarted = () => {

  //const logo = "https://pad.chalkysticks.com/d41f6.svg";
  const logo = "https://pad.chalkysticks.com/583a0.svg";
  // Mechanism to clear localStorage on devices, during testing.
  if(getStoredObject('flag')) {
    console.log('Flag exists');
  } else {
    localStorage.clear();
    console.log('No flag, so storage was cleared');
    storeObject('flag', 1);
  }
  
  return (
    <section className="GetStarted">

      <h1 className="anim-slideDown">Rutinas</h1>
      <h2>Improve your pool game.</h2>
      <div className="logo">
        <img src={logo} alt="Rutinas logo" />
      </div>
      <div className="center">
        <p>Create practice routines from the drills
        <br/>you choose, and monitor your progress.</p>
      </div>

      <Link to="/info"><button className="btn-primary anim-zoomIn">Get Started</button></Link>
      
    </section>
  );
}

export default GetStarted;
