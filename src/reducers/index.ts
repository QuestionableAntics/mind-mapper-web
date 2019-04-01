import ReducerMessage from "../interfaces/reducer-message";
import MindNode from "../classes/mind-node";

const initialMindNodes = [
	new MindNode(1, 0, "", ["this is a note", "this is another note", "this is a third note"], "omg description"),
	new MindNode(2, 1, "yert", ["asdfasdf"], "description"),
	new MindNode(3, 1),
	new MindNode(4, 1),
	new MindNode(5, 1)
];

const initialState = {
	mindNodes: initialMindNodes,
	focusedNode: initialMindNodes[0],
	modalActive: true
};

// TODO: in here or somewhere else, need to save these to a database eventually  

function rootReducer(state = initialState, action: ReducerMessage) {
	switch (action.type) {
		case "ADD_MINDNODE":
			// TODO: assign parent id to new node
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes, action.message],
			});
		case "DELETE_MINDNODE":
			// TODO: implement logic to delete all child nodes of deleted mind node
			// TODO: set focused node to parent of node being deleted
			return Object.assign({}, state, {
				mindNodes: state.mindNodes.filter(mindNode => action.message.id !== mindNode.id),
			});
		case "UPDATE_MINDNODE":
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes.filter(mindNode => action.message.id !== mindNode.id), action.message],
				focusedNode: action.message
			});
		case "SET_FOCUSEDNODE":
			return Object.assign({}, state, {
				focusedNode: action.message,
				parentNode: state.mindNodes.find(node => node.id == action.message.parentId)
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