import { Color } from 'csstype';
import FocusedNodeInformation from "../interfaces/node-information";
import ChildNodeInformation from '../interfaces/child-node-information';

export default class MindNode implements FocusedNodeInformation, ChildNodeInformation {
	public id: number;
	public parentId?: number;
    public title: string;
	public notes: Array<string>;
	public description: string;
	public backgroundColor: Color;
	public textColor: Color;
	xDisplacement: number;
	yDisplacement: number;


	public constructor( id: number,
						parentId?: number,
						title?: string, 
						notes?: Array<string>,
						description?: string,
						backgroundColor?: Color,
						textColor?: Color,
						xDisplacement?: number,
						yDisplacement?: number) {
		this.id = id;
		this.parentId = parentId;
        this.title = title ? title : "test titleasfasdfsaf";
		this.notes = notes ? notes: [];
		this.description = description ? description : "";
		this.backgroundColor = backgroundColor ? backgroundColor: "lightblue";
		this.textColor = textColor ? textColor : "black"
		this.xDisplacement = xDisplacement ? xDisplacement : 0;
		this.yDisplacement = yDisplacement ? yDisplacement : 0;
    }
}