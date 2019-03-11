import MindNode from "../classes/mind-node";
import ReducerMessage from '../interfaces/reducer-message';
import MindNodeReducer from './mind-node-reducer';
import ApplicationState from "../interfaces/application-state";

export default class MindNodeReducerServicer {
	private dispatch: React.Dispatch<ReducerMessage>

	constructor(dispatch: React.Dispatch<ReducerMessage>) {
		this.dispatch = dispatch;
	}

	handleAdd(node: MindNode) {
		this.dispatch({
			type: 'ADD_NODE',
			message: node
		});
	}

	handleDelete(node: MindNode) {
		this.dispatch({
			type: 'DELETE_TODO',
			message: node
		});
	}

	handleUpdate(node: MindNode) {
		this.dispatch({
			type: 'UPDATE_NODE',
			message: node
		})
	}
}