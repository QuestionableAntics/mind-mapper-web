import MindNode from "../classes/mind-node";
import ReducerMessage from "../interfaces/reducer-message";

const MindNodeReducer = (state: MindNode[], action: ReducerMessage) => {
	console.log(state, action);
    
    }
}

export default MindNodeReducer;