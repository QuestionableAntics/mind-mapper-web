import { Color } from 'csstype';
export default interface ChildNodeInformation {
	id: number;
	title: string;
	backgroundColor: Color;
	textColor: Color;
	xDisplacement: number;
	yDisplacement: number;
}