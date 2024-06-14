import './Column.css';
import React, { useState } from 'react';
import Tasks from './Tasks';
import { useStore } from '../store';
// import { shallow } from 'zustand/shallow';

function Column({ state }) {
	const [text, setText] = useState('');
	const [open, setOpen] = useState(false);

	// useStore should come from your store.js. filter our task.state that matches our state
	const tasks = useStore((store) =>
		store.tasks.filter((task) => task.state === state)
	);

	// import our addTask from store.js and pass it into our button element
	const addTask = useStore((store) => store.addTask);

	const setDraggedTask = useStore((store) => store.setDraggedTask);
	const draggedTask = useStore((store) => store.draggedTask);

	return (
		/* e.preventDefault(), makes sure the dragged item does not go back to default position */
		<div
			className='column'
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => {
				console.log(draggedTask);
				setDraggedTask(null);
			}}>
			<div className='titleWrapper'>
				{/* receive state from App.js */}
				<p>{state}</p>
				<button type='' className='' onClick={() => setOpen(true)}>
					Add
				</button>
			</div>
			{tasks.map((task) => (
				<Tasks title={task.title} key={task.state} />
			))}
			{open && (
				<div className='Modal'>
					<div className='modalContent'>
						<input
							type='text'
							className=''
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button
							onClick={() => {
								addTask(text, state);
								setText('');
								setOpen(false);
							}}>
							Submit
						</button>
						<button
							onClick={() => {
								setText('');
								setOpen(false);
							}}>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Column;
