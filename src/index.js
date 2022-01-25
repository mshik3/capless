import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';

createBrowserHistory();

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
