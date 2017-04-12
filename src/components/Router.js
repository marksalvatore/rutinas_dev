import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import Routines from './Routines';
import NewRoutine from './NewRoutine';
import Routine from './Routine';
import DrillDetail from './DrillDetail';
import Info from './Info';
import Score from './Score';
import Save from './Save';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/routines" component={Routines} />
        <Match pattern="/new" component={NewRoutine} />
        <Match pattern="/routine/:routineId" component={Routine} />
        <Match pattern="/drill" component={DrillDetail} />
        <Match pattern="/info" component={Info} />
        <Match pattern="/score" component={Score} />
        <Match pattern="/save" component={Save} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Router;
