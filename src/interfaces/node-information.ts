import { Color } from "csstype";
import ChildNodeInformation from "./child-node-information";

export default interface FocusedNodeInformation {
    title: string;
    notes: Array<string>;
    children: Array<ChildNodeInformation>;
	backgroundColor: Color;
	textColor: Color;
}