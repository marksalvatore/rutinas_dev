import React from 'react';

import drill1 from '../../public/images/fund-1.svg';
import drill2 from '../../public/images/fund-2.svg';
import drill3 from '../../public/images/fund-3.svg';
import drill4 from '../../public/images/fund-4.svg';

import DrillFilter from './DrillFilter';
import SaveRoutine from './SaveRoutine';

class NewRoutine extends React.Component {
  render() {
    return (
    	<div className="Page">

          <DrillFilter />

    	  <div className="drill-frame-wrapper">
             <div className="drill-frame-instr">
                 Select drills for new Routine
             </div>
             <div className="drill-frame">
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Speed Control
                    </div>
                    <img src={drill1} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Straight Stroke
                    </div>
                    <img src={drill2} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Short Straight Stop
                    </div>
                    <img src={drill3} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
                <div className="drill-frame-item">
                    <div className="drill-frame-item-title">
                        Long Straight Stop
                    </div>
                    <img src={drill4} alt="this drill" />
                    <div className="button">Select this drill</div>
                </div>
             </div>
    	  </div>

          <SaveRoutine />

    	</div>
    )
  }
}

export default NewRoutine;
