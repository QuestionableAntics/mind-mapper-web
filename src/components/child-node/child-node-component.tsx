import React, { useState, FunctionComponent } from "react";
import { useGlobal } from 'reactn';
import './child-node-component.scss';
import MindNode from "../../classes/mind-node";

const MindNodeChildComponent: FunctionComponent<{nodeInformation: MindNode, parentNode: MindNode}> = (props: {nodeInformation: MindNode, parentNode: MindNode}) => {
	let [focusedMindNode, setFocusedMindNode] = useGlobal('focusedMindNode');
	let [parentNode, setParentNode] = useGlobal('parentNode');
	let [mindNodes, setMindNodes] = useGlobal('mindNodes');

	return (
		<div className="mind-node-child" key={props.nodeInformation.id} onClick={() => {
				//let newFocusedNode = mindNodeServiceSM.recursiveFind(mindNodes, props.nodeInformation.id);
				// setFocusedMindNode(newFocusedNode);

				// if (newFocusedNode) {
					// let newParentNode = mindNodeServiceSM.recursiveFindParent(mindNodes, newFocusedNode.id);
					// setParentNode(newParentNode);
				// }
			}}>
			{props.nodeInformation.title}
		</div>
	)
}

export default MindNodeChildComponent;