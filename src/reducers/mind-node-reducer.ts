import MindNode from "../classes/mind-node";
import ReducerMessage from "../interfaces/reducer-message";

const MindNodeReducer = (state: MindNode[], action: ReducerMessage) => {
    switch(action.type) {
        case 'ADD_NODE': {
            const newState = state.slice();
            newState.push(action.message);
            return newState;
        }
        case 'DELETE_NODE': {
            const index = state.findIndex(item => item.id === action.message.id);
            if (index !== -1) {
                const newState = state.slice();
                newState.splice(index, 1);
                return newState;
            }
            return state;
		}
		case 'UPDATE_NODE': {
			return state.map((item, index) => {
				if (item.id !== action.message.id) {
					return item
				}
				return {
				  	...action.message
				}
			})
		}
        default:
            return state;
    }
}

export default MindNodeReducer;