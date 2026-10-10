export interface Tool {
	slug: string;
	name: string;
	blurb: string;
}

export const tools: Tool[] = [
	{
		slug: 'board-foot-calculator',
		name: 'board foot calculator',
		blurb: 'lumber math for project planning',
	},
	{
		slug: 'glass-calculator',
		name: 'glass calculator',
		blurb: 'sheet math for the glass rack',
	},
];
