import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

class Info extends React.Component {
  render() {
    return (
        <div className="Page">

          <Nav />

          <h2 className="heading2 color">Information & Instructions</h2>

          <div className="text">
            <p><Link to="/splash"><em className="big">Rutinas</em></Link> is an app to assist you when you practice pool. It contains more than 50 drills you can group into one or more routines. You can then record and monitor your progress performing each of those drills.</p>
            <p>Click the <strong>+ New</strong> tab to create a routine.</p>
            <p>Then select the specific drills to include in your new routine.</p>
            <p>The routines you create will display in the <strong>Routines</strong> tab. Select the routine you want to practice, then click the <strong>Drill</strong> button to see an illustration of the drill, its rules for performing it, as well as notes on how to score it.</p> <p>Click <strong>Enter Score</strong> to record the number of points you scored along with the corresponding number of attempts.</p>
            <p>Your new score will be saved and compared to future scores for that drill, which you can view by clicking the drill's <strong>History</strong> button.</p>
            <p>The <strong>Stats</strong> tab will display all drills you recorded to date, displaying each drill and the combined average for that drill.
            </p>
            <p>For convenience, you might decide to put all drills into one routine, or opt to group the drills into multiple routines. It doesn't matter that a drill is placed in multiple routines. Scores will always apply to that specific drill, regardless of which routine contains it. Likewise, deleting a drill or a routine will not impact past drill scores.</p>
          </div>
 

          <h2 className="heading2 color">About</h2>
          <div className="text">
            <p>This app was built using React, JSON, and the Web Storage API. The drill diagrams were created with, and served by, the super awesome pool table diagraming tool at <a className="color" href="http://pad.chalkysticks.com">pad.chalkysticks.com</a>.</p>
            <p>Conceived, designed and developed by <strong><a className="color" href="mailto:mark@salvatore.us">Mark Salvatore</a></strong> in April 2017.</p>
          </div>

        </div>
    )
  }
}

export default Info;
