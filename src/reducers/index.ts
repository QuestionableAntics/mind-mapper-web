import ReducerMessage from "../interfaces/reducer-message";
import MindNode from "../classes/mind-node";

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
		const childNodes = getChildNodes(parentId);
		let childIds = childNodes.map(node => node.id);

		console.log(childIds);

		const x = childIds.map(id => getAllChildNodeIds(id));

		const y = x.flat();

		console.log(y);

		// const childIds = state.mindNodes
		// 					.filter(node => node.parentId !== parentId)
		// 					.map(node => node.id);
		// const x = childIds.map(node => getAllChildNodeIds(node.id)).flat();
		return childIds;
	}

	function getNode(id?: number): MindNode | undefined {
		return state.mindNodes.find(node => id === node.id);
	}

	function getChildNodes(id?: number, currentState = state): MindNode[] {
		return currentState.mindNodes.filter(node => node.parentId == id);
	}

	function removeNode(id?: number, currentState = state): MindNode[] {
		return currentState.mindNodes.filter(node => node.id !== id);
	}

	function addMindNode(mindNode: MindNode) {
		mindNode.parentId = state.focusedNode.id;

		return Object.assign({}, state, {
			mindNodes: [...state.mindNodes, mindNode],
			childNodes: [...state.childNodes, mindNode]
		});
	}

	function updateMindNode(mindNode: MindNode) {
		return Object.assign({}, state, {
			mindNodes: [...removeNode(mindNode.id), mindNode],
			focusedNode: getNode(mindNode.id)
		});
	}

	function setFocusedNode(mindNode: MindNode) {
		// TODO: set x and y positions of child nodes relative to new focused node

		let focusedNode = {} as MindNode | undefined;
		let parentNode = {} as MindNode | undefined;
		let childNodes = [] as MindNode[];

		if (action.message) {
			focusedNode = getNode(action.message.id);
			parentNode = getNode(action.message.parentId);
			childNodes = getChildNodes(action.message.id);
		}
		return Object.assign({}, state, {
			focusedNode: focusedNode ? focusedNode : new MindNode(0),
			parentNode: parentNode ? parentNode : {} as MindNode,
			childNodes: childNodes ? childNodes : [] as MindNode[],
			modalActive: false
		});
	}

	function deleteNode(mindNode: MindNode) {
		// TODO: implement logic to delete all child nodes of deleted mind node
		// TODO: implement logic to set new parent node upon delete
		const childIds = getAllChildNodeIds(action.message.id);
		const updatedMindNodes = state.mindNodes.map(mindNode => {
			if (childIds.some(id => id == mindNode.id)) {
				mindNode.parentId = action.message.parentId;
			}
			return mindNode;
		})
		.filter(mindNode => action.message.id !== mindNode.id);

		return Object.assign({}, state, {
			mindNodes: updatedMindNodes,
			focusedNode: getNode(action.message.id),
			childNodes: getChildNodes(action.message.id),
			parentNode: getNode(action.message.parentId)
		});
	}


	switch (action.type) {
		case "ADD_MINDNODE":
			return addMindNode(action.message);
		case "DELETE_MINDNODE":
			return deleteNode(action.message);
		case "UPDATE_MINDNODE":
			return updateMindNode(action.message);
		case "SET_FOCUSEDNODE":
			return setFocusedNode(action.message);
		case "TOGGLE_MODAL":
			return Object.assign({}, state, {
				modalActive: !state.modalActive
			});
		default:
			return state;
	}
  };

  

  export default rootReducer;