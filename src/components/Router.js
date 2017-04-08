import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import Instructions from './Instructions';
import Routines from './Routines';
import NewRoutine from './NewRoutine';
import Routine from './Routine';
import Drill from './Drill';
import Stats from './Stats';
import Score from './Score';
import Save from './Save';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/instructions" component={Instructions} />
        <Match pattern="/routines" component={Routines} />
        <Match pattern="/new-routine" component={NewRoutine} />
        <Match pattern="/routine" component={Routine} />
        <Match pattern="/drill" component={Drill} />
        <Match pattern="/stats" component={Stats} />
        <Match pattern="/score" component={Score} />
        <Match pattern="/save" component={Save} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Router;
