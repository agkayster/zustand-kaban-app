import './Column.css';
import React from 'react';
import Tasks from './Tasks';
import { useStore } from '../store';
// import { shallow } from 'zustand/shallow';

function Column({ state }) {
	// useStore should come from your store.js
	const tasks = useStore((store) =>
		store.tasks.filter((task) => task.state === state)
	);
	return (
		<div className='column'>
			<div className='titleWrapper'>
				{/* receive state from App.js */}
				<p>{state}</p>
				<button type='' className=''>
					Add
				</button>
			</div>
			{tasks.map((task) => (
				<Tasks title={task.title} key={task.state} />
			))}
		</div>
	);
}

export default Column;
