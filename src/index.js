import React from 'react';
// For whole render package, import ReactDom from 'react-dom'; 
import { render } from 'react-dom';

import Router from './components/Router';
import './css/style.css';

render(<Router/>, document.querySelector('#main'));
