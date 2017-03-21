import React from 'react';
import { render } from 'react-dom'; // For whole render package 

import Router from './components/Router';
import './css/style.css';

render(<Router/>, document.querySelector('#main'));
