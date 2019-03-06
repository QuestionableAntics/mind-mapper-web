import React, { Component, FunctionComponent, useState } from 'react';
import './App.css';
import MindNodeComponent from './components/parent-node/mind-node-component';
import MindNode from './classes/mind-node';


class App extends Component {

  testData = [
    new MindNode("", ["this is a note", "this is another note", "this is a third note"], [
		new MindNode(),
		new MindNode(),
		new MindNode(),
		new MindNode()
	], "")
  ]

  render() {
    return (
      <div className="App">
        <MindNodeComponent {...this.testData[0]}/>
      </div>
    );
  }
}

export default App;
