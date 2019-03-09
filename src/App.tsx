import React, { Component, FunctionComponent, useState, useReducer } from 'react';
import './App.css';
import MindNodeComponent from './components/parent-node/mind-node-component';
import MindNode from './classes/mind-node';
import mindNodeReducer from './reducers/mind-node-reducer';

let testData = [
    new MindNode(1, "", ["this is a note", "this is another note", "this is a third note"], [
		new MindNode(2),
		new MindNode(3),
		new MindNode(4),
		new MindNode(5)
	], "")
  ]

const App: FunctionComponent<{}> = (props: {}) => {
	let [mindNodes, dispatch] = useReducer(mindNodeReducer, testData);

	return (
		<div className="App">
			<MindNodeComponent{...testData[0]}/>
		</div>
	)
}

export default App;