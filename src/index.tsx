import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/index";
import { addMindNode, updateMindNode, deleteMindNode } from './actions/index';

(window as any)['store'] = store;
(window as any)['addMindnode'] = addMindNode;
(window as any)['updateMindNode'] = updateMindNode;
(window as any)['deleteMindNode'] = deleteMindNode;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
