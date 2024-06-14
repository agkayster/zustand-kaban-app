import { create } from 'zustand';

// contains everything we have in our store which is our tasks
const store = (set) => ({
	tasks: [
		{
			title: 'TestTask',
			state: 'DONE',
		},
	],
	// use the set function because we want to manipulate our tasks
	addTask: (title, state) =>
		set((store) => ({ tasks: [...store.tasks, { title, state }] })),
	deleteTask: (title) =>
		set((store) => ({
			tasks: store.tasks.filter((task) => task.title !== title),
		})),
});
// we just globalised our tasks
export const useStore = create(store);
