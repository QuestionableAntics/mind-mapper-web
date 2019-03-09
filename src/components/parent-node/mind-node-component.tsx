import React, { useState, FunctionComponent } from "react";
import './mind-node-component.scss';
import MindNodeChildComponent from "../child-node/child-node-component";
import MindNode from "../../classes/mind-node";
import MindNodeReducerService from '../../reducers/mind-node-reducer-service';


const MindNodeComponent:FunctionComponent<MindNode> = (initialNodeInformation: MindNode) => {
	let [nodeInformation, setNodeInformation] = useState(initialNodeInformation);
	let [showModal, setShowModal] = useState(false);
	
	console.log(nodeInformation);

    return (
		<div>
			<div className="mind-node" onClick={() => setShowModal(true)}>
				{initialNodeInformation.title}
			</div>
			<ModalComponent initialShow={showModal} node={nodeInformation}></ModalComponent>
			<div>
				{nodeInformation.children.map(node => 
					<MindNodeChildComponent nodeInformation={node} key={node.id} />
				)}
			</div>
		</div>
    );
}

const ModalComponent:FunctionComponent<{node: MindNode, initialShow: boolean}> = (props: {node: MindNode, initialShow: boolean}) => {
	let [nodeInformation, setNodeInformation] = useState(props.node);
	let [show, setShow] = useState(props.initialShow);

	const className = show ? "modal" : "hidden";
	console.log(nodeInformation);

	return (
		<div className={className}>
			<div>{nodeInformation.title}</div>
			{nodeInformation.notes.map((note, i) => <div key={i}>{note}<hr/></div>)}
			<button onClick={() => {setShow(!show)}}></button>
		</div>
	)
}


export default MindNodeComponent;