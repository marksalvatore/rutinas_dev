import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import Setup from './Setup';
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
        <Match pattern="/history/:id" component={History} />
        <Match pattern="/info" component={Info} />
        <Match pattern="/new" component={NewRoutine} />
        <Match pattern="/routines" component={Routines} />
        <Match pattern="/rutinas" component={App} />
        <Match pattern="/routine/:id" component={RoutineDetail} />
        <Match pattern="/save/:id" component={Save} />
        <Match pattern="/score/:id" component={Score} />
        <Match pattern="/setup/:id" component={Setup} />
        <Match pattern="/stats" component={Stats} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
