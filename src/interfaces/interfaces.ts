export interface IFighter { // fighter
	_id: string;
	name: string;
	source: string;
}

export interface IFighterProperties extends IFighter { // fighter details
	attack: IFighterValue,
	defense: IFighterValue,
	health: IFighterValue,
	information: IFighterPropertiesDetails;
}

export interface ICreateProperties { // for html elements
	attributes?: IAttributes;
	className?: string;
	tagName: string;
}

export interface IAttributes { // for attributes in html elements
	[key: string]: any;
}

export interface IFighterPropertiesDetails { // 
	attack: IFighterValue;
	defense: IFighterValue;
	health: IFighterValue;
	name?: string;
}

type IFighterValue = number | string;

