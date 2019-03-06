import React, { useState, FunctionComponent } from "react";
import ChildNodeInformation from "../../interfaces/child-node-information";
import './child-node-component.scss';

const MindNodeChildComponent: FunctionComponent<{nodeInformation: ChildNodeInformation, index: number}> = (props: {nodeInformation: ChildNodeInformation, index: number}) => {
	let [node, setNode] = useState(props.nodeInformation);
	let [index, setIndex] = useState(props.index);
	
	return (
		<div className="mind-node-child" key={index}>
			{node.title}
		</div>
	)
}

export default MindNodeChildComponent;