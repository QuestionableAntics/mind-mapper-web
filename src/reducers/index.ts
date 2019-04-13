import ReducerMessage from "../interfaces/reducer-message";
import MindNode from "../classes/mind-node";
import store from "../store";
import { setFocusedNode } from "../actions";

const initialMindNodes = [
	new MindNode(1, 0, "the og", ["this is a note", "this is another note", "this is a third note"], "omg description"),
	new MindNode(2, 1, "yert", ["asdfasdf"], "description"),
	new MindNode(3, 1, "hello title my old friend"),
	new MindNode(4, 1, "whattado"),
	new MindNode(5, 2, "hey there coder")
];

const initialState = {
	mindNodes: initialMindNodes,
	childNodes: initialMindNodes.filter(node => node.parentId !== initialMindNodes[0].id),
	focusedNode: initialMindNodes[0],
	parentNode: {} as MindNode,
	modalActive: false
};

// TODO: in here or somewhere else, need to save these to a database eventually  

function rootReducer(state = initialState, action: ReducerMessage) {

	function getAllChildNodeIds(parentId: number): number[] {
		const childIds = state.mindNodes
							.filter(node => node.parentId !== parentId)
							.map(node => node.id);
		// const x = childIds.map(node => getAllChildNodeIds(node.id)).flat();
		return childIds;
	}

	switch (action.type) {
		case "ADD_MINDNODE":
			action.message.parentId = state.focusedNode.id;
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes, action.message],
			});
		case "DELETE_MINDNODE":
			// TODO: implement logic to delete all child nodes of deleted mind node
			// TODO: implement logic to set new parent node upon delete
			// const childIds = getAllChildNodeIds(action.message.id);
			// console.log(childIds);
			
			return Object.assign({}, state, {
				mindNodes: state.mindNodes.filter(mindNode => action.message.id !== mindNode.id),
			});
		case "UPDATE_MINDNODE":
			const childIds = getAllChildNodeIds(action.message.id);
			console.log(childIds);
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes.filter(mindNode => action.message.id !== mindNode.id), action.message],
				focusedNode: action.message
			});
		case "SET_FOCUSEDNODE":
			// TODO: set x and y positions of child nodes relative to new focused node
			return Object.assign({}, state, {
				focusedNode: action.message,
				parentNode: state.mindNodes.find(node => node.id == action.message.parentId),
				childNodes: state.mindNodes.filter(node => node.parentId !== action.message.id),
				modalActive: false
			});
		case "TOGGLE_MODAL":
			return Object.assign({}, state, {
				modalActive: !state.modalActive
			});
		default:
			return state;
	}
  };

  

  export default rootReducer;