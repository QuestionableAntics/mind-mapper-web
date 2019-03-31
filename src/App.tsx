import React, { FunctionComponent } from 'react';
import { useGlobal } from 'reactn';
import './App.css';
import MindNodeComponent from './components/parent-node/mind-node-component';
import MindNode from './classes/mind-node';

const App: FunctionComponent<{}> = (props: {}) => {
	let [mindNodes, setMindNodes] = useGlobal('focusedMindNode');

	return (
		<div className="App">
			<MindNodeComponent nodeInformation={mindNodes}/>
		</div>
	)
}

export default App;