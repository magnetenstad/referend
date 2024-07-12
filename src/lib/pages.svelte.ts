export type Note = {
	id: string;
	content: string;
	x: number;
	y: number;
};

export const pages = $state<Note[]>([
	{ id: '1', content: 'test', x: 100, y: 100 },
	{ id: '2', content: 'test 2', x: 400, y: 200 }
]);
