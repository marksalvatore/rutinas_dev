import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import DrillDetailContainer from './DrillDetailContainer';
import GetStarted from './GetStarted';
import History from './History';
import Info from './Info';
import NewRoutine from './NewRoutine';
import NotFound from './NotFound';
import Routines from './Routines';
import RoutineDetail from './RoutineDetail';
import Save from './Save';
import Score from './Score';
import Stats from './Stats';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/home" component={App} />
        <Match pattern="/drill/:id" component={DrillDetailContainer} />
        <Match pattern="/history/:id" component={History} />
        <Match pattern="/info" component={Info} />
        <Match pattern="/new" component={NewRoutine} />
        <Match pattern="/routines" component={Routines} />
        <Match pattern="/routine/:id" component={RoutineDetail} />
        <Match pattern="/save/:id" component={Save} />
        <Match pattern="/score/:id" component={Score} />
        <Match pattern="/splash" component={GetStarted} />
        <Match pattern="/stats" component={Stats} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Router;
