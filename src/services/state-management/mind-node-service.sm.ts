import { useGlobal } from 'reactn';
import MindNode from '../../classes/mind-node';

export default class MindNodeServiceSM {
	private state: MindNode;
	private setState: any;

	constructor() {
		let [mindNodes, setMindNodes] = useGlobal('mindNodes');
		this.state = mindNodes;
		this.setState = setMindNodes;

	}

	private recursiveFind(mindNode: MindNode, id: number): MindNode | null {
		for (let child of mindNode.children) {
			if (mindNode.id == id) {
				return mindNode;
			} else {
            	return this.recursiveFind(child, id);
			}
		}
		return null;
	}

	handleUpdate(updatedMindNode: MindNode) {

	}
}

// switch(action.type) {
// 	case 'ADD_NODE': {
// 		const newState = state.slice();
// 		newState.push(action.message);
// 		return newState;
// 	}
// 	case 'DELETE_NODE': {
// 		const index = state.findIndex(item => item.id === action.message.id);
// 		if (index !== -1) {
// 			const newState = state.slice();
// 			newState.splice(index, 1);
// 			return newState;
// 		}
// 		return state;
// 	}
// 	case 'UPDATE_NODE': {
// 		console.log(state);
// 		return state.map((item, index) => {
// 			if (item.id !== action.message.id) {
// 				return item
// 			}
// 			return {
// 				  ...action.message
// 			}
// 		})
// 	}
// 	default:
// 		return state;