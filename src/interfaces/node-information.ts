import { Color } from "csstype";
import ChildNodeInformation from "./child-node-information";

export default interface FocusedNodeInformation {
    title: string;
    notes: Array<string>;
	backgroundColor: Color;
	textColor: Color;
}