import MindNode from "../classes/mind-node";

export default interface ReducerMessage {
	type: string;
	message: MindNode;
}