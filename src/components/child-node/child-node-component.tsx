import React, { useState, FunctionComponent } from "react";
import ChildNodeInformation from "../../interfaces/child-node-information";
import './child-node-component.scss';

const MindNodeChildComponent: FunctionComponent<{nodeInformation: ChildNodeInformation}> = (props: {nodeInformation: ChildNodeInformation}) => {
	let [node, setNode] = useState(props.nodeInformation);
	
	return (
		<div className="mind-node-child" key={node.id}>
			{node.title}
		</div>
	)
}

export default MindNodeChildComponent;