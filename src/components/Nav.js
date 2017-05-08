import React from 'react';
import { Link } from 'react-router';

import '../css/Nav.css';

const Nav = () => {

	//const logo = "https://pad.chalkysticks.com/dbcb7.svg";
	//const infoIcon = "//upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/120px-Information_icon.svg.png";

  return (
      <nav className="Nav">
          <Link to="/info"><div>Info</div></Link>
          {/*<Link to="/info"><img src={infoIcon} width="50" alt="Rutinas logo"/></Link>*/}
          
          <Link to="/stats"><div>Stats</div></Link>
          <Link to="/routines"><div>Routines</div></Link>
          <Link to="/new"><div>+ New</div></Link>
      </nav>
  );

}

export default Nav;
