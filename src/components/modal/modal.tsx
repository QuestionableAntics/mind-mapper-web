import React, { Component, FunctionComponent, useState, useReducer } from "react";
import MindNode from "../../classes/mind-node";
import { useGlobal } from "reactn"
import MindNodeServiceSM from '../../services/state-management/mind-node-service.sm';

const ModalComponent:FunctionComponent<{ node: MindNode}> = (props: { node: MindNode }) => {
	let [nodeInformation, setNodeInformation] = useState(props.node);
	let [showModal, setShowModal] = useGlobal('showModal');
	let mindNodeService = new MindNodeServiceSM();

	function updateDescription(description: string) {
		const newNodeInformation: MindNode = {...nodeInformation}
		newNodeInformation.description = description;
		setNodeInformation(newNodeInformation);
	}

	function updateTitle(title: string) {
		const newNodeInformation: MindNode = {...nodeInformation};
		newNodeInformation.title = title;
		setNodeInformation(newNodeInformation);
	}

	const className = showModal ? "modal" : "hidden";

	console.log(nodeInformation);

	return (
		<div className={className}>
			<div>title</div>
			<input value={nodeInformation.title} onChange={event => updateTitle(event.target.value)}/>
			<div>description</div>
			<textarea value={nodeInformation.description} onChange={event => updateDescription(event.target.value)} />
			{/* <div>notes</div>
			{nodeInformation.notes.map((note, i) => <input key={i} value={note}/>)} */}
			<button onClick={() => {mindNodeService.handleUpdate(nodeInformation)}}>Save</button>
			<button onClick={() => {setShowModal(!showModal)}}>Exit</button>
		</div>
	)
}

export default ModalComponent;