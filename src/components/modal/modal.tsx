import React, { Component, FunctionComponent, useState, useReducer } from "react";
import MindNode from "../../classes/mind-node";
import { useGlobal } from "reactn"
import { updateMindNode, toggleModal } from "../../actions";
import store from "../../store";
import { connect } from "react-redux";


const mapStateToProps = (state: any) => {
	return {props: {node: state.focusedNode}}
}

const ConnectedModalComponent:FunctionComponent<{ node: MindNode}> = (props: { node: MindNode }) => {
	let nodeInformation = props.node;
	let modalActive = store.getState().modalActive;
	let className = modalActive ? "modal" : "hidden";

	store.subscribe(() => {

		modalActive = store.getState().modalActive;
		className = modalActive ? "modal" : "hidden";
	});

	function updateDescription(description: string) {
		const newNodeInformation: MindNode = {...nodeInformation}
		newNodeInformation.description = description;
		store.dispatch(updateMindNode(newNodeInformation));
	}

	function updateTitle(title: string) {
		const newNodeInformation: MindNode = {...nodeInformation};
		newNodeInformation.title = title;
		store.dispatch(updateMindNode(newNodeInformation));
	}

	function updateNode(node: MindNode) {
		store.dispatch(updateMindNode(node));
	}

	function setModalActive() {
		store.dispatch(toggleModal());
	}

	return (
		<div className={className}>
			<div>title</div>
			<input value={nodeInformation.title} onChange={event => updateTitle(event.target.value)}/>
			<div>description</div>
			<textarea value={nodeInformation.description} onChange={event => updateDescription(event.target.value)} />
			<button onClick={() => updateNode(nodeInformation)}>Save</button>
			<button onClick={() => setModalActive()}>Exit</button>
		</div>
	)
}

const ModalComponent = connect(mapStateToProps)(ConnectedModalComponent);

export default ModalComponent;