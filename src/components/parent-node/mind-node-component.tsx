import React, { useState, FunctionComponent } from "react";
import { useGlobal } from 'reactn';
import './mind-node-component.scss';
import MindNodeChildComponent from "../child-node/child-node-component";
import ModalComponent from "../modal/modal";
import MindNode from "../../classes/mind-node";

const MindNodeComponent:FunctionComponent<MindNode> = (nodeInformation: MindNode) => {
	let [showModal, setShowModal] = useGlobal('showModal');
	
    return (
		<div>
			<div className="mind-node" onClick={() =>{ setShowModal(!showModal); }}>
				{nodeInformation.title}
			</div>
			<ModalComponent node={nodeInformation} />
			<div>
				{nodeInformation.children.map(node => 
					<MindNodeChildComponent nodeInformation={node} key={node.id} />
				)}
			</div>
		</div>
    );
}

export default MindNodeComponent;