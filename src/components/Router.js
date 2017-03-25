import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => {
	return (
		<BrowserRouter basename="/catchoftheday">
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

export default Router;
