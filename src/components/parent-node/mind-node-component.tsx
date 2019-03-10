import React, { useState, FunctionComponent, useReducer } from "react";
import './mind-node-component.scss';
import MindNodeChildComponent from "../child-node/child-node-component";
import MindNode from "../../classes/mind-node";
import MindNodeReducerService from '../../reducers/mind-node-reducer-service';
import { useGlobal } from 'reactn';
import '../modal/modal.scss';
import MindNodeReducer from "../../reducers/mind-node-reducer";
import MindNodeReducerServicer from "../../reducers/mind-node-reducer-service";


const MindNodeComponent:FunctionComponent<MindNode> = (initialNodeInformation: MindNode) => {
	let [nodeInformation, setNodeInformation] = useState(initialNodeInformation);
	// let [showModal, setShowModal] = useState(true);
	let [showModal, setShowModal] = useGlobal('showModal');
	
	console.log(nodeInformation);

    return (
		<div>
			<div className="mind-node" onClick={() =>{ setShowModal(!showModal);}}>
				{initialNodeInformation.title}
			</div>
			<ModalComponent node={nodeInformation}></ModalComponent>
			<div>
				{nodeInformation.children.map(node => 
					<MindNodeChildComponent nodeInformation={node} key={node.id} />
				)}
			</div>
		</div>
    );
}


const ModalComponent:FunctionComponent<{ node: MindNode}> = (props: { node: MindNode }) => {
	let [nodeInformation, setNodeInformation] = useState(props.node);
	let [showModal, setShowModal] = useGlobal('showModal');
	let [nodes, dispatch] = useReducer(MindNodeReducer, []);
	const mindNodeReducerService: MindNodeReducerService = new MindNodeReducerServicer(dispatch);


	const className = showModal ? "modal" : "hidden";
	console.log(nodeInformation);

	return (
		<div className={className}>
			<div>{nodeInformation.title}</div>
			{nodeInformation.notes.map((note, i) => <textarea  key={i} value={note}/>)}
			<button onClick={() => {mindNodeReducerService.handleUpdate(nodeInformation)}}>Save</button>
			<button onClick={() => {setShowModal(!showModal)}}>Exit</button>
		</div>
	)
}


export default MindNodeComponent;