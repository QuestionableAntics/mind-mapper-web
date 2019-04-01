import React, { useState, FunctionComponent } from "react";
import { useGlobal } from 'reactn';
import './mind-node-component.scss';
import MindNodeChildComponent from "../child-node/child-node-component";
import ModalComponent from "../modal/modal";
import MindNode from "../../classes/mind-node";
import store from "../../store";
import { setFocusedNode, toggleModal } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
	return {props: {node: state.focusedNode}}
}

const MindNodeComponentConnected:FunctionComponent<{nodeInformation: MindNode}> = (props: {nodeInformation: MindNode}) => {
	let focusedNode = store.getState().focusedNode;
	let parentNode = store.getState().mindNodes.find(node => focusedNode.parentId == node.id) || {} as MindNode;
	let childNodes = store.getState().mindNodes.filter(node => focusedNode.id == node.parentId);

	store.subscribe(() => {
		focusedNode = store.getState().focusedNode;
		parentNode = store.getState().mindNodes.find(node => node.id == focusedNode.parentId) || {} as MindNode;
		childNodes = store.getState().mindNodes.filter(node => focusedNode.id == node.parentId);
	});

	function setFocused(node: MindNode) {
		store.dispatch(setFocusedNode(node));
	}

	function setShowModal() {
		store.dispatch(toggleModal());
	}
	console.log(parentNode);

    return (
		<div>
			{ parentNode &&
				<div className="parent-node mind-node" onClick={() => setFocused(parentNode) }>
					{parentNode.title}
				</div>
			}
			{ focusedNode &&
			<div className="mind-node" onClick={() => setShowModal() }>
				{focusedNode.title}
			</div>
			}
			<ModalComponent node={focusedNode} />
			{ focusedNode && 
			<div>

				{childNodes.map(node => 
					<MindNodeChildComponent nodeInformation={node} parentNode={props.nodeInformation} key={node.id} />
				)}
			</div>
			}
		</div>
    );
}

const MindNodeComponent = connect(mapStateToProps)(MindNodeComponentConnected);

export default MindNodeComponent;