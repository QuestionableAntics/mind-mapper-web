import React, { FunctionComponent } from 'react';
import { useGlobal } from 'reactn';
import './App.css';
import MindNodeComponent from './components/parent-node/mind-node-component';
import MindNode from './classes/mind-node';

const App: FunctionComponent<{}> = (props: {}) => {
	let [mindNodes, setMindNodes] = useGlobal('mindNodes');
	return (
		<div className="App">
			<MindNodeComponent {...mindNodes[0]}/>
		</div>
	)
}

export default App;