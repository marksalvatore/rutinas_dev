import React from 'react';
import { Link } from 'react-router';

import '../css/Nav.css';

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/info"><div>Info</div></Link>
            <Link to="/stats"><div>Stats</div></Link>
            <Link to="/routines"><div>Routines</div></Link>
            <Link to="/new"><div>+ New</div></Link>
        </nav>
    );

}

export default Nav;
