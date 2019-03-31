import React, { useState, FunctionComponent } from "react";
import { useGlobal } from 'reactn';
import './mind-node-component.scss';
import MindNodeChildComponent from "../child-node/child-node-component";
import ModalComponent from "../modal/modal";
import MindNode from "../../classes/mind-node";

const MindNodeComponent:FunctionComponent<{nodeInformation: MindNode}> = (props: {nodeInformation: MindNode}) => {
	let [showModal, setShowModal] = useGlobal('showModal');
	let [focusedNode, setFocusedNode] = useGlobal('focusedMindNode');
	let [parentNode, setParentNode] = useGlobal('parentNode');

    return (
		<div>
			{ parentNode &&
				<div className="parent-node mind-node" onClick={() => { setFocusedNode(parentNode) }}>
					{parentNode.title}
				</div>
			}
			{ focusedNode &&
			<div className="mind-node" onClick={() =>{ setShowModal(!showModal); }}>
				{focusedNode.title}
			</div>
			}
			<ModalComponent node={props.nodeInformation} />
			{ focusedNode && 
			<div>
				{/* {props.nodeInformation.children.map(node => 
					<MindNodeChildComponent nodeInformation={node} parentNode={props.nodeInformation} key={node.id} />
				)} */}
			</div>
			}
		</div>
    );
}

export default MindNodeComponent;