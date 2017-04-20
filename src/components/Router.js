import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import Stats from './Stats';
import Routines from './Routines';
import NewRoutine from './NewRoutine';
import RoutineDetail from './RoutineDetail';
import DrillDetailContainer from './DrillDetailContainer';
import History from './History';
import Info from './Info';
import Score from './Score';
import Save from './Save';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/home" component={App} />
        <Match pattern="/new" component={NewRoutine} />
        <Match pattern="/routines" component={Routines} />
        <Match pattern="/routine/:id" component={RoutineDetail} />
        <Match pattern="/drill/:id" component={DrillDetailContainer} />
        <Match pattern="/info" component={Info} />
        <Match pattern="/stats" component={Stats} />
        <Match pattern="/history/:id" component={History} />
        <Match pattern="/score/:id" component={Score} />
        <Match pattern="/save/:id" component={Save} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

export default Router;
