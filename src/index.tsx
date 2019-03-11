import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setGlobal } from 'reactn';
import MindNode from './classes/mind-node';


setGlobal({
	showModal: false,
	mindNodes: 
		new MindNode(1, "", ["this is a note", "this is another note", "this is a third note"], "omg description", [
			new MindNode(2, "yert", ["asdfasdf"], "description", []),
			new MindNode(3),
			new MindNode(4),
			new MindNode(5)
		])
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
