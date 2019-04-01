import React, { useState, FunctionComponent } from "react";
import { useGlobal } from 'reactn';
import './child-node-component.scss';
import MindNode from "../../classes/mind-node";
import { setFocusedNode } from "../../actions";
import store from "../../store";

// const mapStateToProps = (state: any) => {
// 	var componentState = {
// 		props: {
// 			nodeInformation
// 		}
// 	}
// 	return {props: {node: state.focusedNode}}
// }

const MindNodeChildComponent: FunctionComponent<{nodeInformation: MindNode, parentNode: MindNode}> = (props: {nodeInformation: MindNode, parentNode: MindNode}) => {
	function setFocusedMindNode(node: MindNode) {
		store.dispatch(setFocusedNode(node));
	}

	return (
		<div className="mind-node-child" key={props.nodeInformation.id} onClick={() => setFocusedMindNode(props.nodeInformation)}>
			{props.nodeInformation.title}
		</div>
	)
}

export default MindNodeChildComponent;