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
	childNodes: initialMindNodes.filter(node => node.parentId !== initialMindNodes[0].id),
	focusedNode: initialMindNodes[0],
	parentNode: {} as MindNode,
	modalActive: true
};

// TODO: in here or somewhere else, need to save these to a database eventually  

function rootReducer(state = initialState, action: ReducerMessage) {
	switch (action.type) {
		case "ADD_MINDNODE":
			action.message.parentId = state.focusedNode.id;
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes, action.message],
			});
		case "DELETE_MINDNODE":
			// TODO: implement logic to delete all child nodes of deleted mind node
			// TODO: implement logic to set new parent node upon delete
			return Object.assign({}, state, {
				mindNodes: state.mindNodes.filter(mindNode => action.message.id !== mindNode.id),
				focusedNode: action.message.parentId,
				// parentNode: state.mindNodes.find(node => action.message.parentId == node.id)
			});
		case "UPDATE_MINDNODE":
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes.filter(mindNode => action.message.id !== mindNode.id), action.message],
				focusedNode: action.message
			});
		case "SET_FOCUSEDNODE":
			return Object.assign({}, state, {
				focusedNode: action.message,
				parentNode: state.mindNodes.find(node => node.id == action.message.parentId),
				childNodes: state.mindNodes.filter(node => node.parentId !== action.message.id)
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