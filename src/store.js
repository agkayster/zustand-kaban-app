import { create } from 'zustand';

// contains everything we have in our store which is our tasks
const store = (set) => ({
	tasks: [
		{
			title: 'TestTask',
			state: 'DONE',
		},
	],

	// keep/receive/persist what is being dragged into a column
	draggedTask: null,

	// use the set function because we want to manipulate our tasks
	addTask: (title, state) =>
		set((store) => ({ tasks: [...store.tasks, { title, state }] })),

	deleteTask: (title) =>
		set((store) => ({
			tasks: store.tasks.filter((task) => task.title !== title),
		})),

	// give our dragged task a title and manipulate it
	setDraggedTask: (title) => set({ draggedTask: title }),
});
// we just globalised our tasks
export const useStore = create(store);
