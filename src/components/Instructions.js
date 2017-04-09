import React from 'react';
import Nav from './Nav';

class Instructions extends React.Component {
  render() {
    return (
        <div className="Page">

    	  <Nav />

          <div className="Page-title">Instructions</div>
          <div className="Page-text">
            <p>Just click <strong>new routine</strong> and select from any of the 11 categories, all the drills you want to add.</p>
            <p>To score your routine, click routines and select the routine you want to work with. Then click on the drill you want to shoot and click enter score. Just enter the number of attempts you made and how many points your scored according to the scoring instructions for that drill.</p>
                <p>Click stats to see how your drill performance is progressing.</p>
                <p>NOTE: It's good to practice the drill and become comfortable with it, before testing yourself.</p>
          </div>


    	</div>
    )
  }
}

export default Instructions;
