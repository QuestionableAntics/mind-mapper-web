import MindNode from "../classes/mind-node";
import ReducerMessage from "../interfaces/reducer-message";

export function addMindNode(mindNode: MindNode): ReducerMessage {
	const message = {
		type: "ADD_MINDNODE",
		message: mindNode
	};
	
	return message;
}

export function updateMindNode(mindNode: MindNode): ReducerMessage {
	const message = {
		type: "UPDATE_MINDNODE",
		message: mindNode
	};

	return message;
}

export function deleteMindNode(mindNode: MindNode): ReducerMessage {
	const message = {
		type: "DELETE_MINDNODE",
		message: mindNode
	};

	return message;
}

export function setFocusedNode(mindNode: MindNode): ReducerMessage {
	const message = {
		type: "SET_FOCUSEDNODE",
		message: mindNode
	}

	return message;
}

export function toggleModal(): ReducerMessage {
	const message = {
		type: "TOGGLE_MODAL",
		message: {} as MindNode
	}

	return message;
}