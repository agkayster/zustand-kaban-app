import { useEffect } from 'react';
import { useStore } from './store';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('zustand');

function TestComponent({ selector, effect }) {
	const items = useStore(selector);

	useEffect(() => effect(items), [items]);

	return null;
}

test('should return default value at the start', () => {
	/* store.tasks is assigned to selector which is then assigned to items above */
	const selector = (store) => store.tasks;

	// a mocked function
	const effect = vi.fn();
	render(<TestComponent selector={selector} effect={effect} />);

	/* expect "effect" which is a function that checks store.tasks to have been initialised with an empty array, which is true*/
	expect(effect).toHaveBeenCalledWith([]);
});

test('should add an item to the store and rerun the effect', () => {
	const selector = (store) => ({
		tasks: store.tasks,
		addTask: store.addTask,
		deleteTask: store.deleteTask,
	});

	let createdTask = false;
	let currentItems;
	// a mocked function
	const effect = vi.fn().mockImplementation((items) => {
		currentItems = items;
		if (!createdTask) {
			items.addTask('a', 'b');
			createdTask = true;
		} else if (items.tasks.length === 1) {
			items.deleteTask('a');
		}
	});
	render(<TestComponent selector={selector} effect={effect} />);

	/* expect "effect" which is a function that checks store.tasks to have been initialised with an empty array, which is true*/
	expect(effect).toHaveBeenCalledTimes(3);
	expect(currentItems.tasks).toEqual([]);
});

test('should delete an item to the store and rerun the effect', () => {
	const selector = (store) => ({
		tasks: store.tasks,
		deleteTask: store.deleteTask,
	});

	// a mocked function
	const effect = vi.fn().mockImplementation((items) => {
		if (items.tasks.length > 0) {
			items.tasks.map((task) => items.deleteTask(task.title));
		}
	});
	render(<TestComponent selector={selector} effect={effect} />);

	expect(effect).toHaveBeenCalledTimes(1);
});
