import React from 'react';
import { Link } from 'react-router';

import '../css/Info.css';
import Nav from './Nav';

const Info = () => {
  return (
      <section className="Info">

        <Nav />

        <h2>Info & Instructions</h2>

        <div className="text-left">
          <p><Link to="/"><em className="big">Rutinas</em></Link> is an app to assist you when you practice pool. It contains more than 50 drills you can group into one or more routines. You can then record each drill performance and monitor your progress over time.</p>
          <p>Click the <strong>+ New</strong> tab to create a routine.</p>
          <p>Then select the specific drills you'd like to include in your new routine.</p>
          <p>The routines you create will display in the <strong>Routines</strong> tab. Select the routine you want to practice, then click the <strong>Setup</strong> button to see an illustration of the drill, its rules for performing it, as well as notes on how to score it.</p> <p>Click <strong>Score</strong> to record the number of points you scored along with the corresponding number of attempts.</p>
          <p>Your new score will be saved and compared to future scores for that drill, which you can view by clicking the drill's <strong>History</strong> button.</p>
          <p>The <strong>Stats</strong> tab will display all drills you recorded to date, displaying each drill and the combined average for that drill.
          </p>
          <p>For convenience, you might decide to put all drills into one routine, or opt to group the drills into multiple routines. It doesn't matter that a drill is placed in multiple routines. Scores will always apply to the drill, regardless of which routine contains it. Likewise, deleting a drill or a routine will not impact past drill scores.</p>
          <p>Be aware that this current version of <strong className="color">Rutinas</strong> keeps your score history in your browser's storage, so clearing data from your browser might clear your drill history.</p>
        </div>

        <h2>Tips</h2>
        <div className="text-left">
          <p>The app asks for the number of points you scored and the number of attempts it took you. A simple way to keep track of these for some drills, is to start with some set number of balls (say ten), then you need count only the number of attempts it took to make them.</p>
        </div>

        <h2>About</h2>
        <div className="text-left">
          <p>This app was built using React, JSON, and the Web Storage API. The drill diagrams were created with, and served by, the super awesome pool table diagraming tool at <a href="http://pad.chalkysticks.com">pad.chalkysticks.com</a>.</p>
          <p>Conceived, designed and developed by <strong><a href="http://www.salvatore.us">Mark Salvatore</a></strong>. April 2017.</p>
        </div>

      </section>
  );
}

export default Info;
