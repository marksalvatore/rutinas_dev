import React from 'react';
import { Link } from 'react-router';

import '../css/GetStarted.css';
import logo from '../../public/images/safe-3.svg';

const GetStarted = () => {
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
