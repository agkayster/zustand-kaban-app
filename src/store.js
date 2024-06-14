import { create } from 'zustand';

// contains everything we have in our store which is our tasks
const store = (set) => ({
	tasks: [
		{
			title: 'TestTask',
			state: 'DONE',
		},
	],
});
// we just globalised our tasks
export const useStore = create(store);
