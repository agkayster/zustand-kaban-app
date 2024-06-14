import './Column.css';
import React from 'react';
import Tasks from './Tasks';
import { useStore } from '../store';
// import { shallow } from 'zustand/shallow';

function Column({ state }) {
	// useStore should come from your store.js
	const tasks = useStore(
		(store) => store.tasks.filter((task) => task.state === state)
		// shallow
		// (prev, next) => {
		// 	const longest =
		// 		prev.length > next.length ? prev.length : next.length;
		// 	for (let i = 0; i < longest; i++) {
		// 		if (!prev[i] || !next[i]) return false;
		// 		if (prev[i] !== next[i]) return false;
		// 	}
		// 	return true;
		// }
	);
	return (
    <div className='column'>
      {/* receive state from App.js */}
			<p>{state}</p>
			{tasks.map((task) => (
				<Tasks title={task.title} key={task.state} />
			))}
		</div>
	);
}

export default Column;
