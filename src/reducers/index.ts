import ReducerMessage from "../interfaces/reducer-message";
import MindNode from "../classes/mind-node";

const initialState = {
	mindNodes: [
		new MindNode(1, 0, "", ["this is a note", "this is another note", "this is a third note"], "omg description"),
		new MindNode(2, 1, "yert", ["asdfasdf"], "description"),
		new MindNode(3, 1),
		new MindNode(4, 1),
		new MindNode(5, 1)
	]
  };

  function rootReducer(state = initialState, action: ReducerMessage) {
	switch (action.type) {
		case "ADD_MINDNODE":
			 return Object.assign({}, state, {
				 mindNodes: [...state.mindNodes, action.message]
			});
		case "DELETE_MINDNODE":
			return Object.assign({}, state, {
				mindNodes: state.mindNodes.filter(mindNode => action.message.id !== mindNode.id)
			});
		case "UPDATE_MINDNODE":
			return Object.assign({}, state, {
				mindNodes: [...state.mindNodes.filter(mindNode => action.message.id !== mindNode.id), action.message]
			})
		default:
			return state;
	}
  };
  export default rootReducer;