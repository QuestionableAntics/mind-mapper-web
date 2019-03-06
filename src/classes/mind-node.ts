import { Color } from 'csstype';
import FocusedNodeInformation from "../interfaces/node-information";
import ChildNodeInformation from '../interfaces/child-node-information';

export default class MindNode implements FocusedNodeInformation, ChildNodeInformation {
    public title: string;
    public notes: Array<string>;
    public children: Array<ChildNodeInformation>;
	public backgroundColor: Color;
	public textColor: Color;
	xDisplacement: number;
	yDisplacement: number;


	public constructor( title?: string, 
						notes?: Array<string>, 
						children?: Array<ChildNodeInformation>, 
						backgroundColor?: Color,
						textColor?: Color,
						xDisplacement?: number,
						yDisplacement?: number) {
        this.title = title ? title : "test titleasfasdfsaf";
        this.notes = notes ? notes: [];
        this.children = children ? children : [];
		this.backgroundColor = backgroundColor ? backgroundColor: "lightblue";
		this.textColor = textColor ? textColor : "black"
		this.xDisplacement = xDisplacement ? xDisplacement : 0;
		this.yDisplacement = yDisplacement ? yDisplacement : 0;
    }
}