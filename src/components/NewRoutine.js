import React from 'react';

import drill1 from '../../public/images/route-1.png';
import drill2 from '../../public/images/route-2.png';
import drill3 from '../../public/images/route-3.png';
import drill4 from '../../public/images/route-4.png';
import drill5 from '../../public/images/route-5.png';
import drill6 from '../../public/images/route-6.png';
import drill7 from '../../public/images/route-7.png';
import drill8 from '../../public/images/route-8.png';

class NewRoutine extends React.Component {
  render() {
    return (
    	<div className="Page">
    	  <div className="Page-title">New Routine</div>
    	  <div className="Page-window">
            <img src={drill1} alt="this drill" />
            <img src={drill2} alt="this drill" />
            <img src={drill3} alt="this drill" />
            <img src={drill4} alt="this drill" />
            <img src={drill5} alt="this drill" />
            <img src={drill6} alt="this drill" />
            <img src={drill7} alt="this drill" />
            <img src={drill8} alt="this drill" />
    	  </div>

    	</div>
    )
  }
}

export default NewRoutine;
